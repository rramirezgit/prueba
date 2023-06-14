import { IncomingForm, File } from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form: any = new IncomingForm()
  form.uploadDir = './public/assets'
  form.keepExtensions = true

  form.parse(req, (err: Error, fields: any, files: any) => {
    if (err) {
      console.error(err)
      return res.status(500).end()
    }
    /* recibe una imagen */
    const file: File = files.file
    const filePath: string = file.filepath
    console.log('file', file)

    // fs.rename(filePath, `./public/assets/${fileName}`, err => {
    //   if (err) {
    //     console.error(err)
    //     return res.status(500).end()
    //   }

    //   return res
    //     .status(200)
    //     .json({ success: true, message: 'Imagen subida exitosamente' })
    // })
  })
}
