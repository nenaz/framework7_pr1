import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7React, { App, View } from 'framework7-react';
import 'framework7/css/framework7.bundle.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { f7params } from './routes';

Framework7.use(Framework7React);

ReactDOM.render(
  <App params={f7params}>
    <View main url="/" />
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
