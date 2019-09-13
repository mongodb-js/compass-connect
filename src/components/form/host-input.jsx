import React from 'react';
import PropTypes from 'prop-types';
import Actions from 'actions';
import FormInput from './form-input';

const DEFAULT_HOST = 'localhost';

class HostInput extends React.PureComponent {
  static displayName = 'HostInput';

  static propTypes = { hostname: PropTypes.string };

  /**
   * Changes a host name.
   *
   * @param {Object} evt - evt.
   */
  onHostnameChanged(evt) {
    Actions.onHostnameChanged(evt.target.value);
  }

  /**
   * Gets a host name.
   *
   * @returns {String} hostname.
   */
  getHostname() {
    return this.props.hostname;
  }

  render() {
    return (
      <FormInput
        label="Hostname"
        name="hostname"
        placeholder={DEFAULT_HOST}
        changeHandler={this.onHostnameChanged.bind(this)}
        value={this.getHostname()} />
    );
  }
}

export default HostInput;
