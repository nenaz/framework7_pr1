import * as React from 'react';
import { Page, Navbar, Link } from 'framework7-react';

export const HomePage = () => (
  <Page name="home">
    <Navbar title="Home Page" />
    ...
    <Link href="/about/">About Page</Link>
    <Link href="/login/">Login Page</Link>
  </Page>
)