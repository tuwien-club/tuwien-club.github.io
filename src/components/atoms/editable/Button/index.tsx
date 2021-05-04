import {MDBBtn} from 'mdb-react-ui-kit'
import React from 'react'

import SidebarEditor from '@components/molecules/Editor'

import {EditableProps} from '../types'

type SubelementProps = React.ComponentProps<typeof MDBBtn>
interface Props extends SubelementProps, EditableProps {
  updateContent: (
    content: string,
    bifrostOptions: EditableProps['bifrostOptions']
  ) => void
}

const EditableButton = ({updateContent, ...props}: Props) => {
  const {bifrostOptions, ...subProps} = props

  const onUpdateContent = (content: string) =>
    updateContent(content, bifrostOptions)

  return (
    <MDBBtn {...subProps}>
      <SidebarEditor onChange={onUpdateContent} />
    </MDBBtn>
  )
}

export default EditableButton
