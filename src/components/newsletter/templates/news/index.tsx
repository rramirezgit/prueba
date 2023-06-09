import { Archive } from 'iconsax-react'
import styles from './news.module.css'
import ShareIcon from '@mui/icons-material/Share'
import { icons } from '@/components/commingSoon/socialMediaIcons/icons'
import Image from 'next/image'

interface NewsTemplateProps {
  textHeader: string
  img: string
  title: string
  readingTime: string
  tags?: string[]
  text: string
  color: string
}

const NewsTemplate = ({
  textHeader,
  img,
  title,
  readingTime,
  tags = [],
  text,
  color
}: NewsTemplateProps) => {
  return (
    <div className={styles.content}>
      <div
        className={styles.textHeader}
        style={{
          background: `linear-gradient(270deg, rgba(235, 186, 89, 0) 0%, ${color} 99.17%)`
        }}
        dangerouslySetInnerHTML={{ __html: textHeader }}
      ></div>
      <div className={styles.img}>
        <Image
          alt="img"
          height={241}
          src={img}
          width={482}
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className={styles.contentData}>
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div className={styles.contentinfo}>
          <div className={styles.info}>
            <div className={styles.infodate}>
              <div>
                {new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div>{readingTime}</div>
            </div>
            <div className={styles.tags}>
              {tags.map((item, index) => (
                <div key={index} className={styles.tag}></div>
              ))}
            </div>
          </div>
          <div className={styles.btns}>
            <div className={styles.btn}>
              <Archive size="16" />
            </div>
            <div className={styles.btn}>
              <ShareIcon sx={{ fontSize: '16px' }} />
            </div>
          </div>
        </div>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className={styles.social}>
          {icons.map((item, index) => (
            <div
              aria-label="social-media"
              key={index}
              className={styles.icon}
              onClick={() => {
                window.open(item.href, '_blank')
              }}
            >
              <Image alt={item.name} height={14} src={item.url} width={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsTemplate
