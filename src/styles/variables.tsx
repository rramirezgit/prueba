interface Colors {
  primary_text: string
  secondary_text: string
  primary_blue: string
  primary_yellow: string
  secondary_blue: string
  secondary_yellow: string
  primary_gray: string
  secondary_gray: string
  error: string
  warning: string
  success: string
  info: string
}

export const sizes = {
  width: '1300px'
}

export const colors: Colors = {
  // text //
  primary_text: '#29394E',
  secondary_text: '#B7C9CF',

  // primary //
  primary_blue: '#39C0CC',
  primary_yellow: '#F9BB19',
  primary_gray: '#F1F1F1',

  // secondary //
  secondary_blue: '#9CDFE5',
  secondary_yellow: '#FDEBBA',
  secondary_gray: '#E5E5E5',

  // else //
  error: '#E02D3C',
  warning: '#ffbf8a',
  success: '#27AE60',
  info: '#a9d4f7'
}
