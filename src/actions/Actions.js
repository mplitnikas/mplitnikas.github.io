import Axios from 'axios';

import {store} from './../index';
import * as ActionTypes from './ActionTypes';

export const updateSearchTerms = (searchTerms) => {
  return {type: ActionTypes.UPDATE_SEARCH_TERMS, payload: searchTerms}
}

export const submitSearchTerms = () => {
  const state = store.getState().songs;
  const searchTerms = state.searchTerms;
  const encodedSearch = encodeURIComponent(searchTerms);
  const url = `https://itunes.apple.com/search?term=${encodedSearch}`;

  return async function(dispatch) {
    console.log('inside submit', url)
    try {
      const response = await Axios.get(url);
      if (response && response.data) {
        console.log(response.data.results);
        updateSongList(response.data.results);
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

export const updateSortCriteria = () => {}