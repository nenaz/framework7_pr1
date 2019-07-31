// @flow
import * as React from 'react';
import { Field } from 'react-final-form';
import { TextInputComponent } from './text-input';

type TTextInputFieldProps = {
  name: string,
  label: string,
};

export const TextInputField = (props: TTextInputFieldProps) => {
  console.log('props', props)
  return (
    <Field
      fullWidth
      required
      name={props.name}
      component={TextInputComponent}
      type="text"
      label={props.label}
    />
  );
};
