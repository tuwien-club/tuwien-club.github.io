/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {CounterAction, CounterActionTypes, CounterState} from './types'

const initialState = {
  count: 0
}

/**
 * Counter Reducer
 */
export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  const {count} = state
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: count + 1
      }
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: count > 0 ? count - 1 : 0
      }
    case CounterActionTypes.RESET:
      return initialState
    default:
      return state
  }
}
