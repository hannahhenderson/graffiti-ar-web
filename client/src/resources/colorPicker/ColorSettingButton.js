import React from 'react';
import ColorPickerButton from './ColorPickerButton.js';
import { connection } from './../headerState.js';

class ColorSettingButton extends React.Component {
  constructor(props) {
    super(props);
    this.setUserColorOnClick = this.setUserColorOnClick.bind(this);
  }

  setUserColorOnClick() {
    fetch(`${process.env.HOST_SERVER}:3000/user/color`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ color: this.props.currentColor }),
    }).catch(() => {
        msg.show('Unauthorized access, please log in', {
          time: 5000,
          type: 'error',
        });
    });
  }

  render() {
    return <ColorPickerButton func={this.setUserColorOnClick} text="Set Your Color" />;
  }
}

ColorSettingButton.propTypes = {
  currentColor: React.PropTypes.string,
};

export default connection(ColorSettingButton);
