import {DropAPI} from '@API'
import {createAsyncThunk} from '@reduxjs/toolkit'

import {convertPageListToTree} from '@common/utils'

// First, create the thunk
export const fetchBifrostPages = createAsyncThunk(
  'bifrost_Pages/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data, errors} = await DropAPI.queries.doPagesQuery({})
      console.log(errors)
      if (errors) {
        throw new Error(
          `Action fetchBifrostPages failed with ${JSON.stringify(errors)}`
        )
      }

      return convertPageListToTree(data ? (data.pages as any) : [])
      // return convertPageListToTree(data ? data.pages : [])
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)
