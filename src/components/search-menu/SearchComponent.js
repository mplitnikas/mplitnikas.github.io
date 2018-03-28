import React, {Component} from 'react';

class SearchComponent extends Component {

  handleSearchbarChange = (event) => {
    this.props.actions.updateSearchTerms(event.target.value);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center py-5">
            <input
              className="h1 artist-search"
              placeholder="Search artists here_"
              onInput={this.handleSearchbarChange}
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;