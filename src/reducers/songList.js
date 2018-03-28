import * as ActionTypes from '../actions/ActionTypes';

const getDefaultState = () => {
  return {
    songList: null,
    searchTerms: '',
    sortType: null,
  }
}

const songList = (state = getDefaultState(), action) => {
  switch (action) {
    case ActionTypes.UPDATE_SEARCH_TERMS:
      return {...state, searchTerms: action.payload};
    default:
      return state;
  }
}

export default songList;