// @flow
import * as React from 'react';
import {
  Page,
  Navbar,
  Block,
  Button,
  Link,
} from 'framework7-react';
import { Form } from 'react-final-form';
import FontAwesome from 'react-fontawesome';
import './auth-page.scss'; 

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

const onSubmit = () => {
  console.log('onSubmit');
};

export class AuthPage extends React.PureComponent<*> {
  render() {
    const { handleAuth } = this.props;

    return (
      <Page name="login">
        <Navbar title="Login" />
        <Block>
          <Form
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => {
              return (
                <React.Fragment>
                  <div className='button-wrapper fadein-fast'>
                    <button 
                      className='vkontakte auth-button'
                      onClick={handleAuth}
                    >
                      <FontAwesome
                        name='vk'
                      />
                    </button>
                  </div>
                    <Link href="/about/">About Page</Link>
                  <Button href="/about/" raised fill>
                  </Button>
                </React.Fragment>
              );
            }}
            onSubmit={onSubmit}
          />
        </Block>
      </Page>
    );
  }
}
