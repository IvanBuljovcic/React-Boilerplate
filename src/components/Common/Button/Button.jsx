import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { text, type } = props;

  switch (type) {
    case 'reset':
      return (
        <input
          type="reset"
          className="app-btn app-btn--cancel"
          value="Cancel"
        />
      );
    case 'submit':
      return (
        <button type="submit" className="app-btn app-btn--submit">
          Submit
        </button>
      );

    default:
      return (
        <button className="app-btn" type="button">
          {text}
        </button>
      );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.oneOf(['reset', 'submit', 'button'])
};

Button.defaultProps = {
  text: 'I\'m a button',
  btnType: 'button'
};

export default Button;
