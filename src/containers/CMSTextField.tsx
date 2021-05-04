import {connect} from 'react-redux'

import EditableTextField from '@components/atoms/editable/TextField'

import {updatePageContent} from '@store/cms/cmsActions'
import {CMSBlock, CMSField} from '@store/cms/cmsReducer'
import {AppDispatch, RootState} from '@store/store'

const mapStateToProps = ({}: RootState) => ({
  // active: !cms.isEditing
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateContent: (element: CMSField | CMSBlock) =>
    dispatch(updatePageContent({element}))
  //   remove: () => dispatch(decrement)
})

export const CMSTextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableTextField)
