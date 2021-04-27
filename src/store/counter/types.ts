/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {Action} from 'redux'

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET'
}

export type CounterAction =
  | Action<CounterActionTypes.INCREMENT>
  | Action<CounterActionTypes.DECREMENT>
  | Action<CounterActionTypes.RESET>

export interface CounterState {
  readonly count: number
}
