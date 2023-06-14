import bg from '@/assets/img/bg.svg'

interface Values {
  textHeader: string
  color: string
  img: string
  title: string
  text: string
  readingTime: string
  tags: string[]
}

const initialValues = (values: Values) => {
  return {
    textHeader: values?.textHeader || 'texto del header',
    color: values?.color || '#F9BB19',
    img: values?.img || bg,
    title: values?.title || 'titulo de la noticia',
    text: values?.text || 'loren ipsum',
    readingTime: values?.readingTime || '',
    tags: values?.tags || []
  }
}

export default initialValues
