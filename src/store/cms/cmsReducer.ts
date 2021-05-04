import {createReducer} from '@reduxjs/toolkit'

import {
  loadPageContent,
  publishPageContent,
  updatePageContent
} from './cmsActions'

export type CMSField = {
  type: 'FIELD'
  pageId: string
  pageName: string
  fieldName: string
  content: string
}

export type CMSBlock = {
  type: 'BLOCK'
  pageId: string
  pageName: string
  fieldName: string
  blockType: string
  blockPosition: number
  blockId: number
  content: string
}

// type CMSState = {
//   fields: {
//     [CMSPageId: string]: {
//       [CMSFieldId: string]: CMSField
//     }
//   }
//   blocks: {
//     [CMSPageId: string]: {
//       [CMSBlockId: string]: CMSBlock
//     }
//   }
// }

type CMSState = {
  pages: {
    [CMSPageId: string]: {
      id: string
      name: string
      serverContent?: any
      page: {
        blocks?: {
          [CMSBlockId: string]: CMSBlock
        }
        fields?: {
          [CMSFieldId: string]: CMSField
        }
      }
    }
  }
}

const initialState: CMSState = {pages: {}}

export const cmsReducer = createReducer(initialState, {
  [loadPageContent.fulfilled.toString()]: (state, action) => {
    const page = action.payload
    const CMSPageId = `${page.id}_${page.__typename}`

    console.log(CMSPageId)

    if (!state.pages[CMSPageId]) {
      state.pages[CMSPageId] = {
        ...state.pages[CMSPageId],
        serverContent: page
      }
    } else {
      state.pages[CMSPageId].serverContent = page
    }
  },
  [updatePageContent.fulfilled.toString()]: (state, action) => {
    console.log(state, action.payload)
    const element = action.payload
    const CMSPageId = `${element.pageId}_${element.pageName}`

    if (element.type === 'FIELD') {
      const CMSId = `${element.pageId}_${element.fieldName}`
      state.pages[CMSPageId] = {
        ...state.pages[CMSPageId],
        id: element.pageId,
        name: element.pageName,
        page: {
          ...state.pages[CMSPageId]?.page,
          fields: {
            ...state.pages[CMSPageId]?.page.fields,
            [CMSId]: element
          }
        }
      }
      // state.fields = {
      //   ...state.fields,
      //   [CMSPageId]: {
      //     // ...state.fields[CMSPageId],
      //     [CMSId]: element
      //   }
      // }
    } else if (element.type === 'BLOCK') {
      const CMSId = `${element.pageId}_${element.fieldName}_${element.blockType}_${element.blockId}`
      state.pages[CMSPageId] = {
        ...state.pages[CMSPageId],
        id: element.pageId,
        name: element.pageName,
        page: {
          ...state.pages[CMSPageId]?.page,
          blocks: {
            ...state.pages[CMSPageId]?.page.blocks,
            [CMSId]: element
          }
        }
      }
    }

    //   state.blocks = {
    //     ...state.blocks,
    //     [CMSPageId]: {
    //       ...state.blocks[CMSPageId],
    //       [CMSId]: element
    //     }
    //   }
    // }

    // switch(action.payload.type){
    //   case "BLOCK":
    //     state.blocks = {}
    // }
    // if(action.payload.type === "BLOCK"){

    // } else if(action.paload)

    // const statePages = state.pages
    // for (const [key, _value] of Object.entries(action.payload)) {
    //   console.log(JSON.stringify(statePages[key]['test']))
    // }
    // state.pages = action.payload
  },
  [publishPageContent.fulfilled.toString()]: (state, action) => {
    console.log(state, action)
  }
})
