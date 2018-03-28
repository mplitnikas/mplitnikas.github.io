import React, {Component} from 'react';

class SongCard extends Component {
  getAltText = () => {
    return "Album art" + ((this.props.collectionName)
      ? ` for ${this.props.collectionName}`
      : '');
  }

  //todo: error handling for no image (maybe just itunes/generic logo?)
  //todo: process image urls 100x100 -> 200x200

  render() {
    return (
      <div className="card-wrapper col-sm-3 mb-5">
        <div className="song-card">
          <header>
            <div className="card-title text-center p-2">
              {this.props.songTitle}
            </div>
          </header>
          <div className="container card-info">
            <div className="row">
              <div className="col">
                {this.props.trackTime}
              </div>
              <div className="col text-right">
                {this.props.trackNumber}
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div>
                <img
                  src={this
                  .props
                  .imageUrl
                  .replace('100x100bb', '200x200bb')}
                  alt={this.getAltText}/>
              </div>
            </div>
            <div className="row m-1">
              <strong>{this.props.albumName}</strong>
            </div>
            <div className="row m-1">
              <div>by: {this.props.artist}</div>
            </div>
            <div className="row m-1">
              <div>{this.props.releaseYear}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongCard;