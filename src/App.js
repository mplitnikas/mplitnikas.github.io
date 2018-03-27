import React, {Component} from 'react';

import './App.css';
import SearchBoxComponent from './components/SearchBoxComponent';
import SortMenuComponent from './components/SortMenuComponent';
import SongGridComponent from './components/songs-grid/SongGridComponent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBoxComponent/>
        <SortMenuComponent/>
        <SongGridComponent/>
      </div>
    );
  }
}

export default App;
