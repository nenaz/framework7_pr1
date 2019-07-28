import React from 'react';
import logo from './logo.svg';
import { App, Statusbar, View, Page, Navbar, Toolbar, Link } from 'framework7-react';
import '../node_modules/framework7/css/framework7.bundle.min.css';
import './App.css';
import { f7params } from './routes';

export default () => (
  // Main Framework7 App component where we pass Framework7 params
  <App params={f7params}>
    <View main url="/" />
  </App>
)
