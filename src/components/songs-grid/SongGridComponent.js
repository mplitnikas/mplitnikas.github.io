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
  return songList && songList
    .map(x => {
      return (<SongCardComponent
        songTitle={x.trackName}
        artist={x.artistName}
        imageUrl={x.artworkUrl100}
        albumName={x.collectionName}
        releaseYear={parseYear(x.releaseDate)}
        trackTime={millisToMinutesAndSeconds(x.trackTimeMillis)}
        trackNumber={getTrackNumberInfo({trackNumber: x.trackNumber, trackCount: x.trackCount})}
      />)
    });
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