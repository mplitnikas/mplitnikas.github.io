import React, {Component} from 'react';

import SongCardComponent from './SongCardComponent';
import loader from './../../loader.gif';

const parseYear = (releaseDate) => {
  const newDate = new Date(releaseDate);
  return newDate.getFullYear();
}

const millisToMinutesAndSeconds = (millis) => {
  const tempDate = new Date(millis);
  const minutes = tempDate.getUTCMinutes();
  const seconds = tempDate.getUTCSeconds();
  return minutes + ':' + ((seconds + '').length === 1 ? '0' + seconds : seconds);
}

const getTrackNumberInfo = ({trackNumber, trackCount}) => {
  if (trackNumber && trackCount) {
    return `${trackNumber} of ${trackCount}`;
  } else {
    return '';
  }
}

const replaceImageUrl = (imageUrl) => {
  return imageUrl.replace('100x100bb', '220x220bb');
}

const drawConditionalIsLoading = (isLoading, component) => {
  return isLoading
    ? loadingSpinner()
    : component
}

const loadingSpinner = () => {
  return (
    <img className="m-5" src={loader} alt="loading..."/>
  );
}

const drawSongCards = (songList) => {
  if (!songList) {
    return;
  }

  if (songList.length > 0) {
    return songList
    .map((song, index) => {
      return (<SongCardComponent
        key={index}
        songTitle={song.trackName}
        artist={song.artistName}
        imageUrl={replaceImageUrl(song.artworkUrl100)}
        albumName={song.collectionName}
        releaseYear={parseYear(song.releaseDate)}
        trackTime={millisToMinutesAndSeconds(song.trackTimeMillis)}
        trackNumber={getTrackNumberInfo({trackNumber: song.trackNumber, trackCount: song.trackCount})}
      />)
    });
  } else {
    return <p className="h3">No songs found for that artist :(</p>
  }
}

class SongGridComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          {drawConditionalIsLoading(this.props.isLoading, drawSongCards(this.props.songList))}
        </div>
      </div>
    );
  }
}

export default SongGridComponent;