import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
  switch (type) {
    case 'reset':
      return (
        <input
          type="reset"
          className="app-btn app-btn--cancel"
          value="Cancel"
          onClick={onClick}
        />
      );

    case 'submit':
      return (
        <button type="submit" className="app-btn app-btn--submit" onClick={onClick}>
          Submit
        </button>
      );

    default:
      return (
        <button className="app-btn" type="button" onClick={onClick}>
          {text}
        </button>
      );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['reset', 'submit', 'button'])
};

Button.defaultProps = {
  text: 'Submit',
  type: 'button'
};

export default Button;
