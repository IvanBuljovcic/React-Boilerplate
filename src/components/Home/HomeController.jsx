import React, { Component } from 'react';

// - Components
import Button from '../Common/Button/Button';
import Home from './Home';

import logo from '../../assets/images/react_logo.png';

class HomeController extends Component {
  state = {
    showHome: false
  };

  handleClick = () => {
    const { showHome } = this.state;
    const newShow = !showHome;

    this.setState({
      showHome: newShow
    });
  };

  render() {
    const { showHome } = this.state;

    return (
      <React.Fragment>
        <Button
          display-if={!showHome}
          onClick={this.handleClick}
          text="Show Home Page"
        />
        <Home
          display-if={showHome}
          title="Home Page Title"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aspernatur quo eaque cupiditate eligendi facere quasi commodi quas maiores, quam doloremque dignissimos asperiores accusantium nihil mollitia laudantium hic assumenda accusamus."
          logo={logo}
        />
      </React.Fragment>
    );
  }
}

export default HomeController;
