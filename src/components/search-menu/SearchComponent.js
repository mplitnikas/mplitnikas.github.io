import React, {Component} from 'react';

class SearchComponent extends Component {

  handleSearchbarChange = (event) => {
    this.props.actions.updateSearchTerms(event.target.value);
  }

  handleSubmitClicked = () => {
    this.props.actions.submitSearchTerms();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.actions.submitSearchTerms();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row py-5 d-flex justify-content-center ">
          <input
            className="h1 artist-search"
            placeholder="Search for an artist"
            onInput={this.handleSearchbarChange}
            onKeyPress={this.handleKeyPress}
            autoFocus/>
          <button
            className="btn btn-search"
            onClick={this.handleSubmitClicked}
          >Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchComponent;