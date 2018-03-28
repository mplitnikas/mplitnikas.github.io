# mplitnikas itunes app
Personal project, solving a programming challenge dealing with retrieving and displaying data from the iTunes JSON API.

## Design
This project required the use of React for page rendering. I chose to use redux to manage application state, and axios (as recommended) to make HTTP calls. Redux-thunk was helpful in dispatching the axios calls asynchronously while using a similar structure as other actions.

### Layout and Styling

For the layout and styling, I chose to try out Bootstrap 4. This combines the familiar container>row>column system of Bootstrap 3 with the option to use Flexbox for more freedom in layout control, as well as some convenient sizing utilities.

I used the color palette 'Adrift in Dreams' palette by Skyblue2u in this project:
http://www.colourlovers.com/palette/580974/Adrift_in_Dreams

### React and Redux
For redux, I separated out the actions, action types, and reducers from the components that use them. I also wrapped the search component and the grid that holds the song cards in redux containers, which make it easy to communicate with components without tightly coupling their communication to their place in the file structure. This way, components are easier to move around during refactors if necessary.

The display components themselves are built as stateless functional components. This, combined with redux and containers, gives us the advantage of the display being a pure function of the internal redux state. Thus, if we know the state of the store, we can recreate the state of the entire application deterministically. Besides being efficient and easy to reason about, this can also allow for things like storing the history of the application to allow moving back and forth between steps of a form, etc.

Redux also has the advantage of allowing middleware to listen in on actions that are passed between components and the store: I was able to add redux-devtools to listen to the internal state while developing, and it would be easy to add Google Analytics to the application later on.

## Future Improvements

### 1. Sort feature for song list

One feature I would like to add in the future is the option to sort songs: either a collection of buttons or a dropdown to choose sorting by title, year, album name, and so on. That component would send out an action that would set a corresponding field in the redux state, and from there the reducer would call an Array.sort() on the songsList array to rearrange them by the selected property.

### 2. Builds per environment

In order to deploy a production build, I had to manually remove redux-devtools since it introduced conflicts in browsers that don't have the correct extension installed. It would be ideal to have a config / .env file that would allow for doing both development and production builds without code changes in between.

### 3. Unit test coverage

While this MVP is fairly small in scope, when adding more changes it becomes increasingly important to have tests around the important logic of the application.

I ran into some errors caused by importing the store object when trying to test the actions - as best I can tell this was caused by the test runner trying to run ReactDOM.render without the proper context. This would need to be cleared up before writing a full suite of tests.

Fortunately, since the display components are built in a functional pattern they contain little logic, so they don't require the same test coverage as a stateful component. The bulk of the tests written would need to be around the actions and reducers since these are what actually controls the application state.

### 4. Automated testing / deployment

Building on item 3, it would be useful to have automated testing happen when committing this code, to help prevent broken builds from making it to master.