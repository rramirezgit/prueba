import renderer from 'react-test-renderer'
import SocialMediaIcons from './'

describe('SocialMediaIcons', () => {
  test('renders correctly', () => {
    const component = renderer.create(<SocialMediaIcons />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
