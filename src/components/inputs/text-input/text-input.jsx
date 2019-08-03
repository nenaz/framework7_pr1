// @flow
import * as React from 'react';
// import { Input, Icon } from 'framework7-react';
import { List, ListInput, Icon } from 'framework7-react';

type TTextInputComponentProps = {};

export class TextInputComponent extends React.PureComponent<TTextInputComponentProps> {  
  // handleInputClear = () => {
  //   this.props.handleInputClear(this.props.input.value);
  // }
  
  render() {
    const {
      input: { value, ...input },
      type,
      label,
    } = this.props;
    console.log('render');
    return (
      <List noHairlinesMd>
        <ListInput
          label={label}
          type={type}
          placeholder={label}
          {...input}
        />
      </List>
    );
  }
}
