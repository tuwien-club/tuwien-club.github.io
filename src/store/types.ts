/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://schett.net/license
 */
import {AsyncCounterState} from './asyncCounter/types'
import {CounterState} from './counter/types'

export interface AppState {
  counter: CounterState
  asyncCounter: AsyncCounterState
}
