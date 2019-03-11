import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ error, errorData, data, loading, clickHandler }) => (
  <div>
    <pre>
      <h1>Example stuff</h1>

      <pre>Error: {`${error}`}</pre>
      <pre>Error Data: {`${errorData}`}</pre>
      <pre>Data: {`${data}`}</pre>
      <pre>Loading: {`${loading}`}</pre>

      <button type="button" onClick={() => clickHandler('Hello World')}>
        CLICK ME
      </button>
    </pre>
  </div>
);

/* eslint-disable react/forbid-prop-types */
Example.propTypes = {
  error: PropTypes.bool,
  errorData: PropTypes.object,
  data: PropTypes.object,
  loading: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Example.defaultProps = {
  error: false,
  errorData: null,
  data: null,
  loading: false,
  clickHandler: () => {},
};

export default Example;
