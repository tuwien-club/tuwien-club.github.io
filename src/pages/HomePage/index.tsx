// import RichTextField from '@components/atoms/editable/RichTextField'
// import TextField from '@components/atoms/editable/TextField'
// import SidebarEditor from '@components/molecules/Editor'
// import {DropAPI} from '@API'
import {useEffect} from 'react'

import {Navbar} from '@components/organisms'
import Footer from '@components/organisms/Footer'

import {CMSRichTextField} from '@containers/CMSRichTextField'
import {CMSTextField} from '@containers/CMSTextField'

import {RootState} from '@store/store'

import './index.scss'

type CMSState = RootState['cms']

interface Props extends CMSState {
  publish: () => void
  loadPage: (id: string) => void
  id: string
  name: string
}

const HomePage = ({pages, id, name, publish, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId].serverContent
  console.log(pageContent)
  console.log(pages)
  console.log(name)

  return (
    <>
      <Navbar />
      <div style={{margin: 100}}>
        {/* <TextField
          bifrostOptions={{
            pageName: 'StudiePage',
            fieldName: 'veryCoolTestField'
          }}
        /> */}
        {/* <RichTextField
          bifrostOptions={{
            pageName: 'HomePage',
            fieldName: 'body',
            blockTypeName: 'subheading'
          }}
        /> */}
        <CMSRichTextField
          content={pageContent.body[0].value}
          bifrostOptions={{
            pageId: '3',
            pageName: 'HomePage',
            fieldName: 'body',
            blockId: 1,
            blockPosition: 0,
            blockType: 'subheading'
          }}
        />
        <CMSTextField
          content={pageContent.body[1].value}
          bifrostOptions={{
            pageId: '3',
            pageName: 'HomePage',
            fieldName: 'body',
            blockId: 1,
            blockPosition: 1,
            blockType: 'heading'
          }}
        />
        {/* <CMSTextField
          content={pageContent.body[2].value}
          bifrostOptions={{
            pageId: '3',
            pageName: 'HomePage',
            fieldName: 'body',
            blockId: 2,
            blockPosition: 2,
            blockType: 'heading'
          }}
        /> */}
        {/* <CMSTextField
          bifrostOptions={{
            pageId: '3',
            pageName: 'HomePage',
            fieldName: 'someotherfield'
          }}
        /> */}
      </div>

      <button onClick={() => publish()}></button>

      <Footer copyrightText={'CC <3 snek'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

export default HomePage
