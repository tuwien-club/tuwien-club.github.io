/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {AppState} from '@store/types'

import {AsyncCounterAction, AsyncCounterActionTypes} from './types'

//#region > Creators
export const asyncIncrement = (): ThunkAction<
  void,
  AppState,
  {},
  AsyncCounterAction
> => {
  return async (
    dispatch: ThunkDispatch<AppState, {}, AsyncCounterAction>,
    {}, // getState,
    {}
  ) => {
    dispatch({type: AsyncCounterActionTypes.INCREMENT_REQUEST})

    try {
      dispatch({type: AsyncCounterActionTypes.INCREMENT_SUCCESS})
    } catch (ex) {
      dispatch({
        type: AsyncCounterActionTypes.INCREMENT_FAILURE,
        payload: {
          error: {
            message: 'Fetching pages failed.'
          }
        }
      })
    }
  }
}

export const asyncDecrement = (): ThunkAction<
  void,
  AppState,
  {},
  AsyncCounterAction
> => {
  return async (
    dispatch: ThunkDispatch<AppState, {}, AsyncCounterAction>,
    {}, // getState,
    {}
  ) => {
    dispatch({type: AsyncCounterActionTypes.DECREMENT_REQUEST})

    try {
      dispatch({type: AsyncCounterActionTypes.DECREMENT_SUCCESS})
    } catch (ex) {
      dispatch({
        type: AsyncCounterActionTypes.DECREMENT_FAILURE,
        payload: {
          error: {
            message: 'Fetching pages failed.'
          }
        }
      })
    }
  }
}
