import FormEmail from '@/components/go/formEmail'
import SocialMediaIcons from '@/components/go/socialMediaIcons'
import style from './go.module.css'
import cel from '@/assets/animation/go/cel.json'
import LottiePlayer from '@/components/common/lottiePlayer'
import imgTop from '@/assets/img/go/GroupTop.svg'
import imgBottom from '@/assets/img/go/GroupBottom.svg'
import Head from 'next/head'
import GoLayout from './layout'
import { Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Go</title>
      </Head>
      <GoLayout>
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
      </GoLayout>
    </>
  )
}
