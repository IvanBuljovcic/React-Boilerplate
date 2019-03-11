import React from 'react';
import PropTypes from 'prop-types';

// - Styles
import './Title.css';

const Title = ({ text, isSubtitle, classModifier }) => {
  const customClass = classModifier ? `app-title--${classModifier}` : '';

  if (isSubtitle) {
    return (
      <h2 display-if={text} className={`app-title app-title--subtitle ${customClass}`}>
        {text}
      </h2>
    );
  }

  return (
    <h1 display-if={text} className={`app-title ${customClass}`}>
      {text}
    </h1>
  );
};

Title.propTypes = {
  classModifier: PropTypes.string,
  text: PropTypes.string,
  isSubtitle: PropTypes.bool,
};

Title.defaultProps = {
  classModifier: null,
  text: null,
  isSubtitle: false,
};

export default Title;
