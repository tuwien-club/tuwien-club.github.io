import {DropAPI} from '@API'
import {DropAPIReferences} from '@API'
import {createAsyncThunk} from '@reduxjs/toolkit'

import {RootState} from '@store/store'

import {CMSBlock, CMSField} from './cmsReducer'

// import {EditableProps} from '@components/atoms/editable/types'

export const loadPageContent = createAsyncThunk(
  'cms/loadPageContent',
  async (
    args: {
      id: string
    },
    thunkAPI
  ) => {
    // const {updatePageDropFn, bifrostArgs} = args
    const {id} = args
    try {
      const {data, errors} = await DropAPI.queries.doPageQuery({id})

      if (!data || errors) {
        throw new Error('DropAPI fetch failed')
      }

      console.log('loaded')

      return data.page
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)

export const updatePageContent = createAsyncThunk(
  'cms/updatePageContent',
  async (
    args: {
      element: CMSField | CMSBlock
    },
    thunkAPI
  ) => {
    // const {updatePageDropFn, bifrostArgs} = args
    const {element} = args
    try {
      return element
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)

export const publishPageContent = createAsyncThunk<{}, {}, {state: RootState}>(
  'cms/publishPageContent',
  async (_, thunkAPI) => {
    // const {updatePageDropFn, bifrostArgs} = args
    const {pages} = thunkAPI.getState().cms
    try {
      // const {data, errors} = await updatePageDropFn(bifrostArgs)
      // console.log(data, errors)
      //   const {data, errors} = await DropAPI.queries.doPagesQuery({})
      //   console.log(errors)
      //   if (errors) {
      //     throw new Error(
      //       `Action fetchBifrostPages failed with ${JSON.stringify(errors)}`
      //     )
      //   }
      //   return ''
      // return convertPageListToTree(data ? data.pages : [])

      for (const [_key, page] of Object.entries(pages)) {
        const inputBlocks: {
          [fielName: string]: {type: string; value: string}[]
        } = {}

        const inputFields: {
          [fielName: string]: string //{type: string; value: string}[]
        } = {}

        // Convert page blocks to inputBlocks
        if (page.page.blocks) {
          for (const [_, block] of Object.entries(page.page.blocks)) {
            if (!inputBlocks[block.fieldName]) {
              inputBlocks[block.fieldName] = []
            }

            inputBlocks[block.fieldName].push({
              type: block.blockType,
              value: block.content
            })

            // inputBlocks[block.fieldName] = [
            //   // ...(inputBlocks[block.fieldName] || []),
            //   {type: block.blockType, value: block.content}
            // ]
          }
        }

        // Convert inputBlocks to inputFields
        for (const [key, blocks] of Object.entries(inputBlocks)) {
          inputFields[key] = JSON.stringify(blocks)
        }

        // Convert page fields to inputFields
        if (page.page.fields) {
          for (const [_, field] of Object.entries(page.page.fields)) {
            inputFields[field.fieldName] = field.content
          }
        }
        console.log(inputFields)
        console.log(DropAPIReferences, `doUpdate${page.name}Mutation`)
        console.log(DropAPIReferences[`doUpdate${page.name}Mutation`])

        await DropAPIReferences[`doUpdate${page.name}Mutation`]({
          id: page.id,
          input: inputFields
        })
      }
    } catch (err) {
      console.log(err)
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)
