import React from 'react'
import Layout from '../layout'
import ColorPicker from '@/components/newsletter/inputs/colorPicker'

const ColorsHeader = () => {
  return (
    <>
      <Layout title="Encabezado">
        <ColorPicker label="Color de fondo" name="color" />
      </Layout>
    </>
  )
}

export default ColorsHeader
