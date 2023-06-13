import styles from './socialMedia.module.css'
import Image from 'next/image'
import { icons } from './icons'
import { CSSObject, IconButton, IconButtonProps, styled } from '@mui/material'
import { colors } from '@/styles/variables'

interface StyledIconButtonProps extends IconButtonProps {
  w?: number
  h?: number
}

export const StyledIconButton = styled((props: StyledIconButtonProps) => (
  <IconButton {...props} />
))<StyledIconButtonProps>(
  ({ w, h }: StyledIconButtonProps): CSSObject => ({
    backgroundColor: colors.secondary_blue,
    width: `${w}px`,
    height: `${h}px`,
    '&:hover': {
      backgroundColor: colors.primary_blue
    }
  })
)

const IconSocial = ({ item, index }: any) => (
  <StyledIconButton
    aria-label="social-media"
    key={index}
    w={36.47}
    h={36.47}
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
