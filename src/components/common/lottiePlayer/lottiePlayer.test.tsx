/* snapshot */

import LottiePlayer from '@/components/common/lottiePlayer'
import cel from '@/assets/animation/comming-soon/cel.json'
import { render } from '@testing-library/react'

describe('LottiePlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LottiePlayer animationData={cel} id="lottie-go" />
    )
    expect(baseElement).toBeTruthy()
  })
})
