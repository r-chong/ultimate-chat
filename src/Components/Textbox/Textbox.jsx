import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Textbox() {
  const [value, setValue] = useState('')
  const modules = {
    history: {
      delay: 2500,
      maxStack: 75,
    },
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'code-block', 'link', 'image'], //toggle buttons
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  }

  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  )
}
