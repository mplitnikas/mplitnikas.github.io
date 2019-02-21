---
layout: post
title: Fear and Loading
date: 2019-02-21
categories: wgot linux
---

This is part of my adventures as a volunteer sysadmin at the WGOT-LP radio station: taking care of an aging Ubuntu 12 server that runs the radio automation suite. Yes, I have plans to upgrade the server in the near future so that we can run ```apt-get upgrade``` without worrying about breaking software. But for now, we're locked into some old versions because of Airtime being out of support.

Anyway, a long path of causation leads to this: Dropbox stopped supporting our old version of the service that we're running, and the newer version requires ```glibc >= 2.17```, whereas ours is ```2.15```.

```./dropbox: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.17' not found (required by ./dropbox)```

Similar to my concerns with running apt upgrade, I'm hesitant to upgrade glibc universally in case it breaks some other software. Not the ideal situation, and we're going to fix it properly soon, but for the moment this is where we stand.

So what then? Well, the idea is to build the newer glibc in a separate directory, and point the ```LD_LIBRARY_PATH``` to that when running the dropbox daemon. Dropbox gets the glibc version it wants, and everyone else is left in peace without their dependencies getting shaken around.

Sure, except for one detail:

```Segmentation fault (core dumped)```

Hmm, Linux doesn't like that one too much. Upon some googling I find a [stack overflow post](https://stackoverflow.com/questions/847179/multiple-glibc-libraries-on-a-single-host) talking about a similar problem when running multiple glibc versions on a system. I also find a little peace knowing that I'm not the only one doing weird hacks like this to get software to run.

It appears that in addition to the newer version of ```libc.so.6``` we need a newer version of the loader, ```ld-linux.so.2``` to match. Fortunately this also comes with the glibc tools when you compile from source. So let's try patching the dropbox ELF with ```patchelf``` (which is super nifty, see [here](https://nixos.org/patchelf.html)) so that it'll use our newly compiled glibc files.

```patchelf --replace-needed libc.so.6 ./libc.so.6 .dropbox-dist/dropbox-lnx.x86_64-67.4.83/dropbox```

```patchelf --set-interpreter ld-linux-x86-64.so.2 .dropbox-dist/dropbox-lnx.x86_64-67.4.83/dropbox```

And we get:

```.dropbox-dist/dropbox-lnx.x86_64-67.4.83/dropbox: error while loading shared libraries: libpthread.so.0: cannot open shared object file: No such file or directory```

Hmm. Still doesn't have everything it needs. What's more, even trying to set the rpath using patchelf doesn't allow it to link this library. Let's see what's going on using ```strace```.

```access("/etc/ld.so.preload", R_OK)      = -1 ENOENT (No such file or directory) 
open("/home/wgot/.drop2/glibc-new/glibc-2.19/build/tls/x86_64/libpthread.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory) 
stat("/home/wgot/.drop2/glibc-new/glibc-2.19/build/tls/x86_64", 0x7fffe046fc00) = -1 ENOENT (No such file or directory) 
open("/home/wgot/.drop2/glibc-new/glibc-2.19/build/tls/libpthread.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory) 
stat("/home/wgot/.drop2/glibc-new/glibc-2.19/build/tls", 0x7fffe046fc00) = -1 ENOENT (No such file or directory) 
open("/home/wgot/.drop2/glibc-new/glibc-2.19/build/x86_64/libpthread.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory) 
stat("/home/wgot/.drop2/glibc-new/glibc-2.19/build/x86_64", 0x7fffe046fc00) = -1 ENOENT (No such file or directory) 
open("/home/wgot/.drop2/glibc-new/glibc-2.19/build/libpthread.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory) 
stat("/home/wgot/.drop2/glibc-new/glibc-2.19/build", {st_mode=S_IFDIR|0775, st_size=4096, ...}) = 0```

So even with the correct rpath, the ELF is looking in the wrong subdirectories. At this point I tried manually linking all the individual dependencies as listed by ```ldd```, but ran into more errors from ld.so running some tests and finding libraries in unexpected places. (?) Decided this was barking up the wrong tree, ultimately.

When in doubt, read the manual, I guess. [This page](https://sourceware.org/glibc/wiki/Testing/Builds) was a big help - turns out the way I was trying to use the newly compiled libraries was needlessly painful. There's a ```testrun.sh``` that comes in the build directory, which will link all the libraries into the path before running your ELF. So we just needed ```./testrun.sh /home/path/to/dropbox``` to get that running. Past that, the only hurdle left is the PYTHONPATH that dropbox tries to set. It gets set to the dir where our application runs, which it thinks is ```build/elf``` since that's where ```ld.so``` resides. However, running 'normally' would keep us in the root dir of the dropbox installation, which python expects in order to be able to find its packages. The lazy way to do this is to copy the files from the dropbox folder to ```build/```, then soft link ```elf/ld.so``` to appear inside ```build/``` as well.

And...done! That was easy, right?

![dropbox lives](/images/dropbox.png)
