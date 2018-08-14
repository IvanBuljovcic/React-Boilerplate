import React from 'react';
import PropType from 'prop-types';

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
  text: PropType.string,
  isSubtitle: PropType.bool
};

Title.defaultProps = {
  text: null,
  isSubtitle: false
};

export default Title;
