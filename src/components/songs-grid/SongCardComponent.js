import React from 'react';

const getAltText = (collectionName) => {
  return "Album art" + ((collectionName)
    ? ` for ${collectionName}`
    : '');
}

const SongCard = ({songTitle, trackTime, trackNumber, imageUrl, albumName, artist, releaseYear}) => {
  return (
    <div className="card-wrapper col-xl-3 col-lg-4 col-md-6 mb-5">
      <div className="song-card">
        <header>
          <div className="card-title text-center p-2">
            {songTitle}
          </div>
        </header>
        <div className="container card-info">
          <div className="row">
            <div className="col">
              {trackTime}
            </div>
            <div className="col text-right">
              {trackNumber}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div>
              <img
                src={imageUrl}
                alt={getAltText(albumName)}
                className="m-2"/>
            </div>
          </div>
          <div className="row m-1">
            <strong>{albumName}</strong>
          </div>
          <div className="row m-1">
            <div>by: {artist}</div>
          </div>
          <div className="row m-1">
            <div>{releaseYear}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;