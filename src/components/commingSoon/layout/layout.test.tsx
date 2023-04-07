import React from 'react'
import renderer from 'react-test-renderer'
import CommingSoonLayout from '.'

test('CommingSoonLayout snapshot', () => {
  const component = renderer.create(
    <CommingSoonLayout>
      <div>Test</div>
    </CommingSoonLayout>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
