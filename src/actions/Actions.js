import * as ActionTypes from './ActionTypes';

export const updateSearchTerms = (searchTerms) => {
  return {
    type: ActionTypes.UPDATE_SEARCH_TERMS,
    payload: searchTerms
  }
}

export const searchForArtist = () => {}
// with thunk, .then for handling

export const updateSortCriteria = () => {}