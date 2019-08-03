// @flow
import * as React from 'react';
// import { connect } from 'react-redux';
import { AuthPage } from './auth-page';
import { windowPopup, closeWindow } from './auth-page-popup-window';

export class AuthPageController extends React.PureComponent<*> {
  handleAuth = () => {
    console.log('handleAuth');
    windowPopup();
  };

  handlePopupClose = () => {
    closeWindow();
  };
  
  render() {
    return (
      <AuthPage handleAuth={this.handleAuth} />
    );
  }
}

// const mapStateToProps = create
// const mapDispatchToProps = {};

// export const AuthPageController = connect(
//   null, mapDispatchToProps,
// )(AuthPageComponent);