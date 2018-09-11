import React from 'react';
import renderer from 'react-test-renderer';

// - Test component
import Title from './Title';

describe('<Title /> component renders correctly', () => {
  test('Default', () => {
    const tree = renderer.create(<Title text="My title" />).toJSON();

    expect(tree).toMatchSnapshot();
  })

  test('Subtitle', () => {
    const tree = renderer.create(<Title text="My subtitle" isSubtitle />).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

