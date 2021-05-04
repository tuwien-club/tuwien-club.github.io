import React from 'react'

import SidebarEditor from '@components/molecules/Editor'

import {CMSBlock} from '@store/cms/cmsReducer'

import {EditableProps} from '../types'

type SubelementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
interface Props extends SubelementProps, EditableProps {
  updateContent: (element: CMSBlock) => void
  content?: string
}

const EditableRichTextField = ({updateContent, ...props}: Props) => {
  const {bifrostOptions, content, ...subProps} = props

  const onUpdateContent = (content: string) => {
    // const block = JSON.stringify([
    //   {type: bifrostOptions.blockTypeName, value: content}
    // ])

    const {
      pageId,
      pageName,
      fieldName,
      blockId,
      blockPosition,
      blockType
    } = bifrostOptions

    if (blockPosition !== undefined && blockType && blockId) {
      updateContent({
        type: 'BLOCK',
        pageId,
        pageName,
        fieldName,
        blockType,
        blockPosition,
        blockId,
        content
      })
    }
  }

  return (
    <div {...subProps}>
      <SidebarEditor
        onChange={onUpdateContent}
        text={content}
        buttonOptions={{
          bold: true,
          italic: true,
          underline: true,
          code: true,
          headlineOne: true,
          headlineTwo: true,
          headlineThree: true,
          unorderedList: true,
          orderedList: true,
          blockquote: true,
          codeBlock: true
        }}
      />
    </div>
  )
}

export default EditableRichTextField
