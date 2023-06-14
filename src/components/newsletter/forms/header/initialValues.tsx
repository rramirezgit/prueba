import logo from '@/assets/img/newsletter/logo_ADAC_Horizontal.svg'
import sponsor from '@/assets/img/newsletter/SimpliSafe_logo.svg'
interface Values {
  textHeader: string
  color: string
  haveSponsored: boolean
  imgHeader: string
  imgSponsored: string
}
const initialValues = (values: Values) => {
  return {
    textHeader: values?.textHeader || '',
    color: values?.color || '#F9BB19',
    haveSponsored: values?.haveSponsored || true,
    imgHeader: values?.imgHeader || logo,
    imgSponsored: values?.imgSponsored || sponsor,
    id: 0
  }
}

export default initialValues
