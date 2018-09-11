import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('<Button /> component renders correctly', () => {
  test('Default button', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  })

  test('Submit button', () => {
    const tree = renderer.create(<Button type="submit" />).toJSON();

    expect(tree).toMatchSnapshot();
  })

  test('Reset button', () => {
    const tree = renderer.create(<Button type="reset" />).toJSON();

    expect(tree).toMatchSnapshot();
  })
})

