import * as React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  List,
  ListInput,
} from 'framework7-react';
import { Form, Field } from 'react-final-form';
// import { TextInput } from '@/components/inputs/text-input';
import { TextInput } from '@/components/inputs/text-input';

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

export const AuthPage = () => (
  <Page name="login">
    <Navbar title="Login" />
    <BlockTitle>Scroll bottom</BlockTitle>
    <Form
      validate={validate}
      render={({ handleSubmit, reset, submitting, pristine, values }) => {
        return (
          <React.Fragment>
            <Block>
              {/* <Field
                fullWidth
                required
                name="firstName"
                component={TextInput}
                type="text"
                label="First Name"
              /> */}
              <TextInput
                name="firstName"
                label="First Name"
              />
              <TextInput
                name="lastName"
                label="Last Name"
              />
              <List noHairlinesMd>
                <ListInput
                  label="thedName"
                  type="text"
                  placeholder="thed name"
                  clearButton
                  // value={value}
                  // {...input}
                />
              </List>
            </Block>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </React.Fragment>
        );
      }}
      onSubmit={onSubmit}
    />
    
  </Page>
)