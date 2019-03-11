/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// - View Component
import ExampleView from './Example';

class ExampleController extends Component {
  handleClick = text => console.log(text);

  render() {
    const { exampleError, exampleErrorData, exampleData, exampleLoading } = this.props;

    return (
      <ExampleView
        error={exampleError}
        errorData={exampleErrorData}
        data={exampleData}
        loading={exampleLoading}
        clickHandler={text => this.handleClick(text)}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
ExampleController.propTypes = {
  exampleError: PropTypes.bool,
  exampleErrorData: PropTypes.object,
  exampleData: PropTypes.object,
  exampleLoading: PropTypes.bool,
};

ExampleController.defaultProps = {
  exampleError: false,
  exampleErrorData: null,
  exampleData: null,
  exampleLoading: false,
};

export default ExampleController;
