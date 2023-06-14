import { SpeedDial, SpeedDialAction } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import ShareIcon from '@mui/icons-material/Share'
import { Html5, Setting } from 'iconsax-react'
import { colors } from '@/styles/variables'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { useRouter } from 'next/router'
import socialMediaIcons from '@/assets/img/icons/socialMedia'

const actions = [
  { icon: <SaveIcon />, name: 'Guardar' },
  { icon: <Html5 />, name: 'Descargar html' },
  { icon: <ShareIcon />, name: 'Compartir' }
]

const FinishButton = () => {
  const router = useRouter()

  const handleDownload = () => {
    const zip = new JSZip()

    // Obtener el contenido HTML y CSS del componente
    const htmlContent = generateHTML()
    const cssContent = generateCSS()

    // Agregar el archivo index.html al ZIP
    zip.file('index.html', htmlContent)

    // Agregar el archivo styles.css al ZIP
    zip.file('styles.css', cssContent)

    // Obtener todas las imágenes del componente
    const images = document.querySelectorAll('img')
    if (!images) return
    // Descargar cada imagen y agregarla al ZIP
    images.forEach(image => {
      const imageUrl = image.getAttribute('src')
      if (!imageUrl) return
      const imageFileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1)
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => zip.file(`images/${imageFileName}`, blob))
    })

    // Generar el archivo ZIP y descargarlo
    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'componente.zip')
    })
  }

  const generateHTML = () => {
    const htmlContent = document.documentElement.outerHTML
    return htmlContent
  }

  const generateCSS = () => {
    let cssContent = ''

    // Obtener los estilos CSS de los elementos del componente
    const styleElements = document.querySelectorAll('style')
    styleElements.forEach(styleElement => {
      cssContent += styleElement.innerHTML
    })

    return cssContent
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<Setting size="25" />}
      FabProps={{
        sx: {
          bgcolor: colors.primary_yellow,
          '&:hover': {
            bgcolor: colors.primary_yellow
          }
        }
      }}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            if (action.name === 'Descargar html') {
              router.push('/newsletter/previewHtml')
              setTimeout(() => {
                handleDownload()
              }, 1000)
            }
          }}
        />
      ))}
    </SpeedDial>
  )
}

export default FinishButton
