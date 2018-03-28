import {connect} from 'react-redux';

import * as Actions from './../../actions/Actions';
import SearchComponent from './SearchComponent';

const mapStateToProps = (state) => {
  return {
    searchTerms: state.searchTerms,
    sortType: state.sortType
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      updateSearchTerms: (terms) => dispatch(Actions.updateSearchTerms(terms))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

export default SearchContainer;