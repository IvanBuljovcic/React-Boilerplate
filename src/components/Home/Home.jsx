import React from 'react';
import PropTypes from 'prop-types';

// - Components
import Title from '../Common/Title/Title';

const Home = ({ title, paragraph, logo }) => (
  <React.Fragment>
    <Title text={title} display-if={title} />
    <p display-if={paragraph}>{paragraph}</p>
    <img display-if={logo} src={logo} alt="" />
  </React.Fragment>
);

Home.propTypes = {
  logo: PropTypes.string,
  paragraph: PropTypes.string,
  title: PropTypes.string
}

Home.defaultProps = {
  logo: null,
  paragraph: null,
  title: null
}

export default Home;
