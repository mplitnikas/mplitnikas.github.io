import React, {Component} from 'react';

import SongCardComponent from './SongCardComponent';
import * as mockSongs from './../../sample-data.json';

const drawSongCards = (songsList) => {
  return songsList.results.map(x => {
    return(
    <SongCardComponent
      title={x.trackName}
      imageUrl={x.artworkUrl100}
    />
    )
  });
}

class SongGridComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex">
          {drawSongCards(mockSongs)}
        </div>
      </div>
    );
  }
}

export default SongGridComponent;