import React, {Component} from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input className="h1 artist-search" placeholder="Search artists here_" autoFocus/>
      </div>
    );
  }
}

export default SearchBox;