import React from 'react'
import Layout from '../layout'
import TextBoxEditor from '@/components/newsletter/inputs/TextBoxEditor'

const TextHeader = () => {
  return (
    <>
      <Layout title="Encabezado">
        <TextBoxEditor name="textHeader" />
      </Layout>
    </>
  )
}

export default TextHeader
