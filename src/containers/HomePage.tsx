import {connect} from 'react-redux'

import {loadPageContent, publishPageContent} from '@store/cms/cmsActions'
import {AppDispatch, RootState} from '@store/store'

import HomePageComponent from '../pages/HomePage'

const mapStateToProps = ({cms}: RootState) => ({
  pages: cms.pages
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  publish: () => dispatch(publishPageContent({})),
  loadPage: (id: string) => dispatch(loadPageContent({id}))
})

export const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent)
