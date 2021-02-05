import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-ios-switch';

import Actions from '../../../../actions';

class CnameInput extends React.PureComponent {
  static displayName = 'CnameInput';

  static propTypes = {
    canonicalize_hostname: PropTypes.bool.isRequired
  }

  onCnameToggle() {
    Actions.onCnameToggle();
  }

  render() {
    return (
      <div className="form-item">
        <label>
          <span className="form-item-label">
            Canonicalize Host Name
          </span>
        </label>
        <div className="form-item-switch-wrapper">
          <Switch
            checked={this.props.canonicalize_hostname}
            onChange={this.onCnameToggle.bind(this)}
            className="form-control-switch"
            onColor="rgb(19, 170, 82)"
            style={{ backgroundColor: 'rgb(255,255,255)'}} />
        </div>
      </div>
    );
  }
}

export default CnameInput;
