import React from 'react';
import { shallow } from 'enzyme';

// - Test component
import Title from './Title';

describe('<Title /> component renders correctly', () => {
  test('Default', () => {
    const wrapper = shallow(<Title text="My Title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Subtitle', () => {
    const wrapper = shallow(<Title text="My Subtitle" isSubtitle />);

    expect(wrapper).toMatchSnapshot();
  });
});
