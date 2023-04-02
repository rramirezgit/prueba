import styles from './socialMedia.module.css'
import Image from 'next/image'
import Icons from './icons'
import Expanded, { StyledIconButton } from './expanded'
import { Box, useMediaQuery } from '@mui/material'

const IconSocial = ({ item, index }: any) => (
  <StyledIconButton aria-label="social-media" key={index}>
    <Image alt={item.name} height={18.24} src={item.url} width={18.24} />
  </StyledIconButton>
)

export default function SocialMediaIcons() {
  const matches = useMediaQuery('(min-width:900px)')

  function shouldRenderIcon(index: number) {
    return index > 3
  }

  function renderIcons() {
    return Icons.map((item, index) => {
      if (shouldRenderIcon(index)) return null
      return <div key={index}>{<IconSocial item={item} index={index} />}</div>
    })
  }

  function renderIconsMobile() {
    return Icons.map((item, index) => {
      if (item.name === 'left') return null
      return <div key={index}>{<IconSocial item={item} index={index} />}</div>
    })
  }

  return (
    <div className={styles.social}>
      {!matches ? renderIconsMobile() : renderIcons()}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Expanded />
      </Box>
    </div>
  )
}
