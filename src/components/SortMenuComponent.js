import React, {Component} from 'react';

class SortMenuComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-5 d-flex justify-content-around">
          <div className="col-sm-2 h4">Sort songs by:</div>
          <div className="col-sm-1">
            <button className="btn btn-sort">Title</button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-sort">Album</button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-sort">Year</button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-sort">Time</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SortMenuComponent;