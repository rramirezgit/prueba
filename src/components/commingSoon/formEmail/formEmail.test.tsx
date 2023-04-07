import React from 'react'
import renderer from 'react-test-renderer'
import FormEmail from '.'

test('FormEmail snapshot', () => {
  const component = renderer.create(<FormEmail />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
