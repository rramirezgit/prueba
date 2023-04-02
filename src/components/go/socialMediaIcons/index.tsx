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

  return (
    <>
      <div className={styles.social}>
        {Icons.map((item, index) => {
          return (
            <>
              {!matches && item.name !== 'left' ? (
                <IconSocial item={item} index={index} />
              ) : (
                index <= 3 && <IconSocial item={item} index={index} />
              )}
            </>
          )
        })}

        {
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'block'
              }
            }}
          >
            <Expanded />
          </Box>
        }
      </div>
    </>
  )
}
