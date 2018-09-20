import React from 'react';
import PropTypes from 'prop-types';

// - Child Components
import Button from '../Common/Button/Button';

const Example = props => (
  <div>
    <Button onClick={() => props.handleClick([1, 2, 3])} />
  </div>
);

Example.propTypes = {
  handleClick: PropTypes.func
}

Example.defaultProps = {
  handleClick: () => {}
}

export default Example
