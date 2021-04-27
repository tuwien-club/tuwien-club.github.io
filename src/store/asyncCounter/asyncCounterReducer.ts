/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {
  AsyncCounterAction,
  AsyncCounterActionTypes,
  AsyncCounterState
} from './types'

const initialState: AsyncCounterState = {
  count: 0
}

export const asyncCounterReducer = (
  state = initialState,
  action: AsyncCounterAction
): AsyncCounterState => {
  const {count} = state

  switch (action.type) {
    case AsyncCounterActionTypes.INCREMENT_REQUEST:
    case AsyncCounterActionTypes.DECREMENT_REQUEST:
      return {...state}
    case AsyncCounterActionTypes.INCREMENT_SUCCESS:
      return {...state, count: count + 1}
    case AsyncCounterActionTypes.DECREMENT_SUCCESS:
      return {...state, count: count - 1}
    case AsyncCounterActionTypes.INCREMENT_FAILURE:
    case AsyncCounterActionTypes.DECREMENT_FAILURE:
      return {...state}
    default:
      return {...state}
  }
}
