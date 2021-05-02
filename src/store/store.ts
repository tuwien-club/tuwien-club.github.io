/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {bifrostPageReducer} from './bifrostPage/bifrostPageReducer'

export const store = configureStore({
  reducer: {
    bifrostPage: bifrostPageReducer
  },
  middleware: getDefaultMiddleware({
    thunk: {extraArgument: {}}
  }),
  devTools: process.env.NODE_ENV !== 'production'
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export interface RootState extends ReturnType<typeof store.getState> {}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
