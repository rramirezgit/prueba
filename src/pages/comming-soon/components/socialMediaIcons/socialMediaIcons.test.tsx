/* snapshot SocialMediaIcons */

import { render } from '@testing-library/react'
import SocialMediaIcons from './index'

describe('SocialMediaIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMediaIcons />)
    expect(baseElement).toBeTruthy()
  })
})
