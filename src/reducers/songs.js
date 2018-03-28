import * as ActionTypes from '../actions/ActionTypes';

const getDefaultState = () => {
  return {
    songList: null,
    searchTerms: '',
    isLoading: false
  }
}

const songs = (state = getDefaultState(), action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_TERMS:
      return {...state, searchTerms: action.payload};
    // case ActionTypes.SUBMIT_SEARCH_TERMS:
    //   return submitSearchRequest(state);
    case ActionTypes.SET_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionTypes.UPDATE_SONG_LIST:
      return {...state, songList: action.payload};
    default:
      return state;
  }
}

export default songs;