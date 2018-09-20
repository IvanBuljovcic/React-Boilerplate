import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button /> Snapshots', () => {
  test('Default button', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Submit button', () => {
    const tree = renderer.create(<Button type="submit" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Reset button', () => {
    const tree = renderer.create(<Button type="reset" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Button /> Tests', () => {
  test('Default button', () => {
    const wrapper = shallow(<Button text="I'm a button" />);
    const text = wrapper.text();

    expect(text).toEqual("I'm a button");
  });

  test('Submit button', () => {
    const wrapper = shallow(<Button type="submit" />);
    const text = wrapper.text();

    expect(text).toEqual('Submit');
  });

  test('Reset button', () => {
    const wrapper = shallow(<Button type="reset" />);
    const text = wrapper.props().value;

    expect(text).toEqual('Cancel');
  });
});
