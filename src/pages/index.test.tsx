import Home from '.'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />)
    expect(screen.getByText('Get started by editing')).toBeInTheDocument()
  })
})
