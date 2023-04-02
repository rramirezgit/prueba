/* snapshot FormEmail */

import { render } from '@testing-library/react'
import FormEmail from './index'

describe('FormEmail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormEmail />)
    expect(baseElement).toBeTruthy()
  })
})
