import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = ({ text, isSubtitle }) => {
  if (isSubtitle) {
    return (
      <h2 display-if={text} className="app-title app-title--subtitle">
        {text}
      </h2>
    );
  }

  return (
    <h1 display-if={text} className="app-title">
      {text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  isSubtitle: PropTypes.bool
};

Title.defaultProps = {
  text: null,
  isSubtitle: false
};

export default Title;
