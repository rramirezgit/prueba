import socialMediaIcons from '@/assets/img/icons/socialMedia'
import { useRef, useState } from 'react'
import { colors } from '@/styles/variables'
import { Slide, IconButton, styled } from '@mui/material'
import Image from 'next/image'
import styles from '../socialMedia.module.css'
import { icons } from '../icons'

export const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: colors.secondary_blue,
  width: '36.47px',
  height: '36.47px',
  '&:hover': {
    backgroundColor: colors.primary_blue
  }
}))

const StyledIButtonExpand = styled(IconButton)(() => ({
  backgroundColor: colors.primary_gray,
  width: '36.47px',
  height: '36.47px',
  '&:hover': {
    backgroundColor: colors.secondary_gray
  }
}))

const Expanded = () => {
  const [checked, setChecked] = useState(false)
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className={styles.constainerExpanded}>
      <StyledIButtonExpand
        aria-label="social-media"
        sx={{
          display: checked ? 'none' : 'flex',
          borderRadius: checked ? '0' : '25px',
          position: 'relative',
          zIndex: 1
        }}
        onClick={() => setChecked(!checked)}
      >
        <Image
          alt={'right'}
          height={18.24}
          src={socialMediaIcons.right}
          width={18.24}
        />
      </StyledIButtonExpand>

      {icons.map((item, index) => {
        if (index <= 3) return null
        return (
          <Slide
            key={index}
            direction="right"
            in={checked}
            container={containerRef.current}
          >
            {item.name !== 'left' ? (
              <StyledIconButton
                aria-label="social-media"
                onClick={() => {
                  window.open(item.href, '_blank')
                }}
              >
                <Image
                  alt={item.name}
                  height={18.24}
                  src={item.url}
                  width={18.24}
                />
              </StyledIconButton>
            ) : (
              <StyledIButtonExpand
                aria-label="social-media"
                sx={{ display: checked ? 'flex' : 'none' }}
                onClick={() => setChecked(!checked)}
              >
                <Image
                  alt={'left'}
                  height={18.24}
                  src={socialMediaIcons.left}
                  width={18.24}
                />
              </StyledIButtonExpand>
            )}
          </Slide>
        )
      })}
    </div>
  )
}

export default Expanded
