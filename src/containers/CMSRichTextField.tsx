import {connect} from 'react-redux'

import EditableRichTextField from '@components/atoms/editable/RichTextField'

import {updatePageContent} from '@store/cms/cmsActions'
import {CMSBlock} from '@store/cms/cmsReducer'
import {AppDispatch, RootState} from '@store/store'

const mapStateToProps = ({}: RootState) => ({
  // active: !cms.isEditing
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateContent: (element: CMSBlock) => dispatch(updatePageContent({element}))
  //   remove: () => dispatch(decrement)
})

export const CMSRichTextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableRichTextField)
