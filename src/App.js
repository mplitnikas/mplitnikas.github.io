import React, {Component} from 'react';

import './App.css';
import SearchBox from './components/SearchBox';
import SongCard from './components/SongCard';

class App extends Component {
  render() {
    return (
      <div classname="container">
      <div className="row">
        <div className="col-sm-12 text-center py-5">
          <SearchBox/>
        </div>
      </div>
        <div className="row">
          <div className="col-sm-4">
            <SongCard/>
          </div>
          <div className="col-sm-4">
            <SongCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
