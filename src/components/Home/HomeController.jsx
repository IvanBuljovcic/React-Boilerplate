import React, { Component, lazy, Suspense } from 'react';

// - Components
import Button from '../Common/Button';
import Loader from '../Common/Loader';

// - Assets
import logo from '../../assets/images/react_logo.png';

// - Lazy loaded components
const Home = lazy(() => import('./Home'));

class HomeController extends Component {
  state = {
    showHome: false,
  };

  handleClick = () => {
    const { showHome } = this.state;
    const newShow = !showHome;

    this.setState({
      showHome: newShow,
    });
  };

  render() {
    const { showHome } = this.state;

    return (
      <React.Fragment>
        <Button display-if={!showHome} onClick={this.handleClick} text="Show Home Page" />

        <Suspense fallback={<Loader />}>
          <Home
            display-if={showHome}
            title="Home Page Title"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aspernatur quo eaque cupiditate eligendi facere quasi commodi quas maiores, quam doloremque dignissimos asperiores accusantium nihil mollitia laudantium hic assumenda accusamus."
            logo={logo}
          />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default HomeController;
