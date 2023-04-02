import style from './comming-soon.module.css'
import cel from '@/assets/animation/comming-soon/cel.json'
import LottiePlayer from '@/components/common/lottiePlayer'
import imgTop from '@/assets/img/comming-soon/GroupTop.svg'
import imgBottom from '@/assets/img/comming-soon/GroupBottom.svg'
import Head from 'next/head'
import CommingSoonLayout from './components/layout'
import { Typography } from '@mui/material'
import Image from 'next/image'
import SocialMediaIcons from './components/socialMediaIcons'
import FormEmail from './components/formEmail'

export default function CommingSoon() {
  return (
    <>
      <Head>
        <title>ADAC Comming Soon</title>
      </Head>
      <CommingSoonLayout>
        <div className={style.content}>
          <div className={style.info}>
            <Typography className={style.title}>
              ¡Vuélvete la persona más interesante del lugar!
            </Typography>
            <Typography className={style.text}>
              Únete a nuestro newsletter para recibir las noticias mas
              relevantes antes que cualquiera!
            </Typography>
            <FormEmail />
            <SocialMediaIcons />
          </div>
          <div className={style.contentLottie}>
            <Image alt="cel" src={imgTop} className={style.imgTop} />
            <Image alt="cel" src={imgBottom} className={style.imgBottom} />
            <LottiePlayer animationData={cel} id="lottie-go" />
          </div>
        </div>
      </CommingSoonLayout>
    </>
  )
}
