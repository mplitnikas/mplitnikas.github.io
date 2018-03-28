import React, {Component} from 'react';

import './App.css';
import SongGridContainer from './components/songs-grid/SongGridContainer';
import SearchContainer from './components/search-menu/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchContainer/>
        <SongGridContainer/>
      </div>
    );
  }
}

export default App;
