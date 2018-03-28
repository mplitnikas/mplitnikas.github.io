import * as ActionTypes from '../actions/ActionTypes';

const getDefaultState = () => {
  return {
    songList: null,
    searchTerms: '',
    sortType: null,
    isLoading: false
  }
}

const submitSearchRequest = async (state) => {
  console.log('submit')
  
}

const songs = (state = getDefaultState(), action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_TERMS:
      return {...state, searchTerms: action.payload};
    case ActionTypes.SUBMIT_SEARCH_TERMS:
      return submitSearchRequest(state);
    default:
      return state;
  }
}

export default songs;