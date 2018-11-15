import React from 'react';
import PropTypes from 'prop-types';

const Example = ({
  exampleError,
  exampleErrorData,
  exampleData,
  exampleLoading
}) => {
  console.group('Example component');
  console.log(exampleError);
  console.log(exampleErrorData);
  console.log(exampleData);
  console.log(exampleLoading);
  console.groupEnd();
  
  return (
    <div>
      <pre>
        <h1>Example stuff</h1>
      </pre>
    </div>
  )
}

/* eslint-disable react/forbid-prop-types */
Example.propTypes = {
  exampleError: PropTypes.bool,
  exampleErrorData: PropTypes.object,
  exampleData: PropTypes.object,
  exampleLoading: PropTypes.bool,
}

Example.defaultProps = {
  exampleError: false,
  exampleErrorData: null,
  exampleData: null,
  exampleLoading: false
}

export default Example
