import React from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'

// import { ReactQuillProps } from 'react-quill'

// interface QuillEditorProps extends ReactQuillProps {}

export const QuillEditor = (props: ReactQuillProps) => (
  <ReactQuill
    placeholder="Write description"
    theme={props.theme || 'snow'}
    {...props}
  />
)
