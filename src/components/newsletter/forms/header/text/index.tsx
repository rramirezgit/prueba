import React from 'react'
import Layout from '../../layout'
import TextBoxEditor from '@/components/newsletter/inputs/TextBoxEditor'

const TextHeader = () => {
  return (
    <>
      <Layout>
        <TextBoxEditor name="textHeader" label="editar" />
      </Layout>
    </>
  )
}

export default TextHeader
