import styles from './socialMedia.module.css'
import Image from 'next/image'
import { icons } from './icons'
import { IconButton, styled } from '@mui/material'
import { colors } from '@/styles/variables'

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: colors.secondary_blue,
  width: '36.47px',
  height: '36.47px',
  '&:hover': {
    backgroundColor: colors.primary_blue
  }
}))

const IconSocial = ({ item, index }: any) => (
  <StyledIconButton
    aria-label="social-media"
    key={index}
    onClick={() => window.open(item.href, '_blank')}
  >
    <Image alt={item.name} height={18.24} src={item.url} width={18.24} />
  </StyledIconButton>
)

export default function SocialMediaIcons() {
  return (
    <div className={styles.social}>
      {icons.map((item, index) => {
        return <IconSocial item={item} index={index} key={index} />
      })}
    </div>
  )
}
