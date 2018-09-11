import React from 'react';
import renderer from 'react-test-renderer';

// - Test component
import Loader from './Loader.jsx';

test('<Loader /> renders correctly', () => {
  const tree = renderer.create(<Loader />).toJSON();

  expect(tree).toMatchSnapshot();
});
