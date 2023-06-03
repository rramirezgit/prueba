import { useField } from 'formik'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-quill/dist/quill.snow.css'

interface props {
  name: string
}

const TextBoxEditor = ({ name }: props) => {
  const [field, meta, helpers] = useField(name)
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  )

  return (
    <>
      <ReactQuill
        theme="snow"
        style={{ height: '60vh' }}
        onChange={value => {
          helpers.setValue(value)
        }}
        value={field.value}
      />
    </>
  )
}

export default TextBoxEditor
