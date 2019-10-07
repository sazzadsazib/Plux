import React from 'react';
import { Router } from '@reach/router';
import store from './stores';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import Viewer from './pages/viewer/component/Viewer';
import NotFound from './pages/NotFound/component/NotFound';

const Routes = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <Router>
          <Viewer path='/' />
          <NotFound default />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Routes;
