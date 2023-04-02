import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'

export const StyledInput = styled(TextField)({
  '& .MuiInputBase-root': {
    width: '100%',
    height: '42px',
    '&::after': {
      borderBottom: '2px solid var(--primary_yellow)'
    }
  }
})

export const StyledButton = styled(Button)({
  width: '92px',
  height: '42px',
  background: 'var(--primary_yellow)',
  '&:hover': {
    background: 'var(--primary_yellow)'
  }
})
