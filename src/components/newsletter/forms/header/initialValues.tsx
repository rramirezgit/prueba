import logo from '@/assets/img/newsletter/logo_ADAC_Horizontal.svg'
import sponsor from '@/assets/img/newsletter/SimpliSafe_logo.svg'

const initialValues = (id: string, news: any[]) => {
  return {
    textHeader: '',
    color: '#F9BB19',
    haveSponsored: true,
    imgHeader: logo,
    imgSponsored: sponsor,
    id: 0
  }
}

export default initialValues
