import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './globalAssets/styles/styles.scss';
import WebFont from 'webfontloader';
import dotenv from 'dotenv';

dotenv.config();

WebFont.load({
  google: {
    families: ['Poppins:400,500,600,700', 'sans-serif'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
