/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {Action} from 'redux'

export enum AsyncCounterActionTypes {
  INCREMENT_REQUEST = 'INCREMENT_REQUEST',
  INCREMENT_SUCCESS = 'INCREMENT_SUCCESS',
  INCREMENT_FAILURE = 'INCREMENT_FAILURE',

  DECREMENT_REQUEST = 'DECREMENT_REQUEST',
  DECREMENT_SUCCESS = 'DECREMENT_SUCCESS',
  DECREMENT_FAILURE = 'DECREMENT_FAILURE',

  RESET_REQUEST = 'RESET_REQUEST',
  RESET_SUCCESS = 'RESET_SUCCESS',
  RESET_FAILURE = 'RESET_FAILURE'
}

export type AsyncCounterAction =
  | Action<AsyncCounterActionTypes.INCREMENT_REQUEST>
  | Action<AsyncCounterActionTypes.INCREMENT_SUCCESS>
  | Action<AsyncCounterActionTypes.INCREMENT_FAILURE>
  | Action<AsyncCounterActionTypes.DECREMENT_REQUEST>
  | Action<AsyncCounterActionTypes.DECREMENT_SUCCESS>
  | Action<AsyncCounterActionTypes.DECREMENT_FAILURE>
  | Action<AsyncCounterActionTypes.RESET_REQUEST>
  | Action<AsyncCounterActionTypes.RESET_SUCCESS>
  | Action<AsyncCounterActionTypes.RESET_FAILURE>

export interface AsyncCounterState {
  readonly count: number
}
