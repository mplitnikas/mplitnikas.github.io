import Axios from 'axios';

import {store} from './../index';
import * as ActionTypes from './ActionTypes';

export const updateSearchTerms = (searchTerms) => {
  return {type: ActionTypes.UPDATE_SEARCH_TERMS, payload: searchTerms}
}

export const setIsLoading = (isLoading) => {
  return {type: ActionTypes.SET_IS_LOADING, payload: isLoading};
}

export const submitSearchTerms = () => {
  const state = store.getState().songs;
  const searchTerms = state.searchTerms;
  const encodedSearch = encodeURIComponent(searchTerms);
  const url = `https://itunes.apple.com/search?term=${encodedSearch}`;

  return async function(dispatch) {
    try {
      dispatch(setIsLoading(true));
      const response = await Axios.get(url);
      dispatch(setIsLoading(false));
      if (response && response.data) {
        dispatch(updateSongList(response.data.results));
      } else {
        throw new Error("Got no results for that search!");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateSongList = (songList) => {
  return {type: ActionTypes.UPDATE_SONG_LIST, payload: songList};
}