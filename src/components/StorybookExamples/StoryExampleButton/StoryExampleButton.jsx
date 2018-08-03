import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './StoryExampleButton.scss';


const StoryExampleButton = props => {

	const {
		buttonText,

		buttonLinkPath,
		buttonOnClick,

		buttonStylePrimary,
		buttonStyleSecondary,

		buttonDisabled,

	} = props;

	// style
	const stylePrimary = buttonStylePrimary ? 'story-example-btn--primary' : '';
	const styleSecondary = buttonStyleSecondary ? 'story-example-btn--secondary' : '';


	if ( buttonLinkPath ) {
		return <Link className={ `story-example-btn ${ stylePrimary } ${ styleSecondary }` } to={ buttonLinkPath }>{ buttonText }</Link>
	}

	return <button className={ `story-example-btn ${ stylePrimary } ${ styleSecondary }` } onClick={ buttonOnClick } disabled={ buttonDisabled }>{ buttonText }</button>;

};

export default StoryExampleButton;

StoryExampleButton.propTypes = {
	buttonText: PropTypes.string.isRequired,
	buttonLinkPath: PropTypes.string,
	buttonOnClick: PropTypes.func,
	buttonStylePrimary: PropTypes.bool,
	buttonStyleSecondary: PropTypes.bool,
	buttonDisabled: PropTypes.bool,
};

StoryExampleButton.defaultProps = {
	buttonText: 'Default text',
	buttonLinkPath: null,
	buttonOnClick: null,
	buttonStylePrimary: false,
	buttonStyleSecondary: false,
	buttonDisabled: false,
};
