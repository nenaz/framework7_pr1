// @flow
import * as React from 'react';
import { Field } from 'react-final-form';
import { TextInputComponent } from './text-input';

type TTextInputFieldProps = {
  name: string,
  label: string,
};

// const handleInputClear = (value: string) => {
//   return '';
// }

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
      // handleInputClear={handleInputClear}
    />
  );
};
