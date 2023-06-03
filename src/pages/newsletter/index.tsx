import React from 'react'
import styles from './newsletter.module.css'
import { CardEdit } from 'iconsax-react'
import { Fab } from '@mui/material'
import { colors } from '@/styles/variables'
import FormNewsletter from '@/components/newsletter/forms'
import HeaderTemplate from '@/components/newsletter/templates/header'
import { useSelector } from 'react-redux'

const Newsletter = () => {
  const { color, textHeader } = useSelector((state: any) => state.newsletter)
  const { haveSponsored, imgSponsored, imgHeader } = useSelector(
    (state: any) => state.newsletter
  )

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <FormNewsletter />
        <Fab
          variant="extended"
          size="small"
          style={{
            backgroundColor: colors.primary_yellow,
            position: 'absolute',
            bottom: '20px',
            left: '25px'
          }}
          aria-label="add"
        >
          <CardEdit size="20" variant="Outline" />
        </Fab>
      </div>
      <div className={styles.preview}>
        <HeaderTemplate
          color={color}
          Texto={textHeader}
          haveSponsored={haveSponsored}
          logo={imgHeader}
          sponsor={imgSponsored}
        />
      </div>
    </div>
  )
}

export default Newsletter
