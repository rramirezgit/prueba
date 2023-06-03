import React from 'react'
import styles from './header.module.css'

import Image from 'next/image'
interface props {
  color?: string
  Texto?: any
  haveSponsored?: boolean
  logo?: any
  sponsor?: any
}
const HeaderTemplate = ({
  color,
  Texto,
  haveSponsored,
  logo,
  sponsor
}: props) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.dataHeader}>
          <div className={styles.dataHeaderLeft}>
            <div>20/12/2023</div>
            <div>#Casi Feliz Navidad</div>
          </div>
          <div className={styles.dataHeaderR}>
            <div className={styles.dataHeaderRData}> View Online </div>
            <div className={styles.dataHeaderRData}> Sign up </div>
            <div className={styles.dataHeaderRData}> Play Games </div>
          </div>
        </div>
        <div className={styles.contentImg}>
          {logo && <Image src={logo} alt="logo" width={322} height={118} />}
        </div>
        <div className={styles.contentHr}>
          <div
            className={styles.hrL}
            style={{
              background: `linear-gradient(270deg, rgba(235, 186, 89, 0) 0%, ${color} 99.17%)`
            }}
          ></div>
          <div
            className={styles.hrR}
            style={{
              background: `linear-gradient(90deg, rgba(235, 186, 89, 0) 0%, ${color} 99.17%)`
            }}
          ></div>
        </div>
        {haveSponsored && (
          <>
            <div className={styles.togetherWith}>Juntos con:</div>
            <div>
              {sponsor && (
                <Image src={sponsor} alt="logo" width={230} height={72} />
              )}
            </div>
          </>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: Texto }}
          className={styles.texto}
        />
      </div>
    </>
  )
}

export default HeaderTemplate
