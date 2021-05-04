import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton
} from '@draft-js-plugins/buttons'
import Editor, {createEditorStateWithText} from '@draft-js-plugins/editor'
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar'
import {convertToRaw, EditorState} from 'draft-js'
import {
  Fragment,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import type {AtLeastOne} from '@common/utils'

import editorStyles from './editorStyles.module.css'

interface Props {
  text?: string
  //   onChange: () => null
  buttonOptions?: AtLeastOne<{
    bold: boolean
    italic: boolean
    underline: boolean
    code: boolean
    headlineOne: boolean
    headlineTwo: boolean
    headlineThree: boolean
    unorderedList: boolean
    orderedList: boolean
    blockquote: boolean
    codeBlock: boolean
  }>
}
// = {
//     bold: false,
//     italic: false,
//     underline: false,
//     code: false,
//     headlineOne: false,
//     headlineTwo: false,
//     headlineThree: false,
//     unorderedList: false,
//     orderedList: false,
//     blockquote: false,
//     codeBlock: false
//   }

const SidebarEditor = ({
  text = 'In this editor a toolbar shows up once you select part of the text …',
  buttonOptions
}: Props): ReactElement => {
  const [plugins, SideToolbar] = useMemo(() => {
    const sideToolbarPlugin = createSideToolbarPlugin({
      position: 'right'
    })
    return [[sideToolbarPlugin], sideToolbarPlugin.SideToolbar]
  }, [])

  const editorRef = useRef(null)

  const [editorState, setEditorState] = useState(() =>
    createEditorStateWithText('')
  )

  useEffect(() => {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    setEditorState(createEditorStateWithText(text))
  }, [])

  const editor = useRef<Editor | null>(null)

  const onChange = (value: EditorState): void => {
    console.log('EditoState', convertToRaw(value.getCurrentContent()))
    setEditorState(value)
  }

  const focus = (): void => {
    editor.current?.focus()
  }

  return (
    <div className={editorStyles.editor} onClick={focus}>
      <Editor
        editorKey="SidebarEditor"
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        // ref={element => {
        //   editor.current = element
        // }}
        ref={(editor: any) => (editorRef.current = editor)}
      />
      {buttonOptions && (
        <SideToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            externalProps => (
              <Fragment>
                {buttonOptions.bold && <BoldButton {...externalProps} />}
                {buttonOptions.italic && <ItalicButton {...externalProps} />}
                {buttonOptions.underline && (
                  <UnderlineButton {...externalProps} />
                )}
                {buttonOptions.codeBlock && <CodeButton {...externalProps} />}
                {buttonOptions.headlineOne && (
                  <HeadlineOneButton {...externalProps} />
                )}
                {buttonOptions.headlineTwo && (
                  <HeadlineTwoButton {...externalProps} />
                )}
                {buttonOptions.headlineThree && (
                  <HeadlineThreeButton {...externalProps} />
                )}
                {buttonOptions.unorderedList && (
                  <UnorderedListButton {...externalProps} />
                )}
                {buttonOptions.orderedList && (
                  <OrderedListButton {...externalProps} />
                )}
                {buttonOptions.blockquote && (
                  <BlockquoteButton {...externalProps} />
                )}
                {buttonOptions.codeBlock && (
                  <CodeBlockButton {...externalProps} />
                )}
              </Fragment>
            )
          }
        </SideToolbar>
      )}
    </div>
  )
}

export default SidebarEditor
