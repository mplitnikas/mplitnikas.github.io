import React, {Component} from 'react';

class SortComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center py-5">
            <input
              className="h1 artist-search"
              placeholder="Search artists here_"
              autoFocus/>
          </div>
        </div>
      </div>
    );
  }
}

export default SortComponent;