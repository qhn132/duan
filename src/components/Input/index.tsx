import { Input, InputProps } from 'antd';
import { Component } from 'react';

class InputBase extends Component<InputProps> {
  static Password: (props: InputProps) => JSX.Element;
  render() {
    return <Input style={{ minHeight: 54, borderRadius: 4 }} {...this.props} />;
  }
}

InputBase.Password = (props: InputProps) => (
  <Input.Password style={{ minHeight: 54, borderRadius: 4 }} {...props} />
);

export default InputBase;
