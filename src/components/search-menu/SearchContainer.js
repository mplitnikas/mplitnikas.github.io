import {connect} from 'react-redux';

import * as Actions from './../../actions/Actions';
import SearchComponent from './SearchComponent';

const mapStateToProps = (state) => {
  return {
    searchTerms: state.songs.searchTerms,
    sortType: state.songs.sortType
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      updateSearchTerms: (terms) => dispatch(Actions.updateSearchTerms(terms)),
      submitSearchTerms: (terms) => dispatch(Actions.submitSearchTerms(terms)),
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

export default SearchContainer;