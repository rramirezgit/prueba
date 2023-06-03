import { Typography } from '@mui/material'
import React from 'react'
interface Props {
  children: React.ReactNode
  title: string
}
const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: '20px'
        }}
      >
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default Layout
