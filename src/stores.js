import { init } from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import createEncryptor from 'redux-persist-transform-encrypt';
import { viewer } from './Web/pages/viewer/models/models';

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_SECRET_KEY,
  onError: function(error) {
    console.log(error);
  },
});

const loading = createLoadingPlugin({});

const persistPlugin = createRematchPersist({
  key: 'plux',
  whitelist: ['viewer'],
  throttle: 1000,
  version: 1,
  transforms: [encryptor],
});

const models = {
  viewer,
};

const store = init({
  models,
  plugins: [persistPlugin, loading],
});

export default store;
