import React from 'react';
import { Router } from '@reach/router';
import store from './stores';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import Viewer from './Web/pages/viewer/component/Viewer';
import NotFound from './Web/pages/notFound/component/NotFound';
import ViewerMobile from './Mobile/pages/viewer/component/Viewer';
import NotFoundMobile from './Mobile/pages/notFound/component/NotFound';
import Tour from './Web/pages/tour/component/Tour';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          {isMobile ? (
            <Router>
              <ViewerMobile path='/' />
              <NotFoundMobile default />
            </Router>
          ) : (
            <Router>
              <Viewer path='/' />
              <Tour path={'get-started'} />
              <NotFound default />
            </Router>
          )}
        </PersistGate>
      </Provider>
    );
  }
}

export default Routes;
