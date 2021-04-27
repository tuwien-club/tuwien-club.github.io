/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {
  AnyAction,
  Reducer,
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import {asyncCounterReducer} from './asyncCounter/asyncCounterReducer'
import {counterReducer} from './counter/counterReducer'
import {AppState} from './types'

const combinedReducers = combineReducers({
  counter: counterReducer,
  asyncCounter: asyncCounterReducer
})

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  return combinedReducers(state, action)
}

/**
 * initStore
 * Initialise and export redux store
 */
const initStore = (): Store => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument({})))
  )
}

export const store = initStore()
