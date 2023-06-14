import HeaderTemplate from '@/components/newsletter/templates/header'
import styles from './previewHtml.module.css'
import logo from '@/assets/img/logo.svg'
import sponsor from '@/assets/img/newsletter/SimpliSafe_logo.svg'
import NewsTemplate from '@/components/newsletter/templates/news'

const PreviewHtml = () => {
  return (
    <>
      <div className={styles.content} id="newsletterPreviewHtml">
        <HeaderTemplate
          color="#EBAE59"
          Texto=""
          haveSponsored={true}
          logo={logo}
          sponsor={sponsor}
        />
        <NewsTemplate
          color="#EBAE59"
          img={logo}
          title="Titulo"
          textHeader="Texto de prueba"
          text="Texto de prueba"
          readingTime="2 min de lectura"
        />
        <NewsTemplate
          color="#EBAE59"
          img={logo}
          title="Titulo"
          textHeader="Texto de prueba"
          text="Texto de prueba"
          readingTime="2 min de lectura"
        />
        <NewsTemplate
          color="#EBAE59"
          img={logo}
          title="Titulo"
          textHeader="Texto de prueba"
          text="Texto de prueba"
          readingTime="2 min de lectura"
        />
      </div>
    </>
  )
}

export default PreviewHtml
