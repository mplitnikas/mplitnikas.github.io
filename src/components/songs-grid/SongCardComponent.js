import React, {Component} from 'react';

class SongCard extends Component {
  getAltText = () => {
    return "Album art" + ((this.props.collectionName) ? ` for ${this.props.collectionName}` : '');
  }

  render() {
    return (
      <div className="p-4 card-wrapper">
        <div className="song-card p-3">
          <div className="card-title">
            {this.props.title}
          </div>
          <div className="card-image">
            <img src={this.props.imageUrl} alt={this.getAltText}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SongCard;