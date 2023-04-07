import style from './comming-soon.module.css'
import cel from '@/assets/animation/comming-soon/cel.json'
import LottiePlayer from '@/components/common/lottiePlayer'
import imgTop from '@/assets/img/comming-soon/GroupTop.svg'
import imgBottom from '@/assets/img/comming-soon/GroupBottom.svg'
import Head from 'next/head'
import Image from 'next/image'
import CommingSoonLayout from '@/components/commingSoon/layout'
import FormEmail from '@/components/commingSoon/formEmail'
import SocialMediaIcons from '@/components/commingSoon/socialMediaIcons'

export default function CommingSoon() {
  return (
    <>
      <Head>
        <title>ADAC Comming Soon</title>
      </Head>
      <CommingSoonLayout>
        <div className={style.content}>
          <div className={style.info}>
            <div className={style.title}>
              ¡Vuélvete la persona más interesante del lugar!
            </div>
            <div className={style.text}>
              Únete a nuestro newsletter para recibir las noticias mas
              relevantes antes que cualquiera!
            </div>
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
