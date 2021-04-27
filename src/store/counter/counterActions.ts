/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {CounterAction, CounterActionTypes} from './types'

export const increment: CounterAction = {
  type: CounterActionTypes.INCREMENT
}

export const decrement: CounterAction = {
  type: CounterActionTypes.DECREMENT
}

export const reset: CounterAction = {
  type: CounterActionTypes.RESET
}
