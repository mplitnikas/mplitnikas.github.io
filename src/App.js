import React, {Component} from 'react';

import './App.css';
import SortComponent from './components/SortComponent';
import SortMenuComponent from './components/SortMenuComponent';
import SongGridComponent from './components/songs-grid/SongGridComponent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SortComponent/>
        <SortMenuComponent/>
        <SongGridComponent/>
      </div>
    );
  }
}

export default App;
