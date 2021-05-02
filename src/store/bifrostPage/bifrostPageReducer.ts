import {createReducer} from '@reduxjs/toolkit'
import {pageFields_pagesQuery} from 'drop/lib/types.gen'

import {fetchBifrostPages} from './bifrostPageActions'

const initialState: {pages: pageFields_pagesQuery[]} = {pages: []}

export const bifrostPageReducer = createReducer(initialState, {
  [fetchBifrostPages.fulfilled.toString()]: (state, action) => {
    state.pages = action.payload.pages
  }
})
