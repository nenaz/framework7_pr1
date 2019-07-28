import React from 'react';
import logo from './logo.svg';
import { App, Statusbar, View, Page, Navbar, Toolbar, Link } from 'framework7-react';
import '../node_modules/framework7/css/framework7.bundle.min.css';
import './App.css';

export default () => (
  // Main Framework7 App component where we pass Framework7 params
  <App params={{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }}>

    {/* Status bar overlay for full screen mode (Cordova or PhoneGap) */}
    <Statusbar></Statusbar>

    {/* Your main view, should have "main" prop */}
    <View main>
      {/*  Initial Page */}
      <Page>
        {/* Top Navbar */}
        <Navbar title="Awesome App"></Navbar>
        {/* Toolbar */}
        <Toolbar bottom>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
        </Toolbar>
        {/* Page Content */}
        <p>Page content goes here</p>
        <Link href="/about/">About App</Link>
      </Page>
    </View>
  </App>
)
