import React from 'react';
import PropTypes from 'prop-types';
import Actions from 'actions';
import FormInput from './form-input';

const DEFAULT_PORT = 27017;

class PortInput extends React.PureComponent {
  static displayName = 'PortInput';

  static propTypes = { port: PropTypes.any };

  /**
   * Changes port.
   *
   * @param {Object} evt - evt.
   */
  onPortChanged(evt) {
    Actions.onPortChanged(evt.target.value);
  }

  /**
   * Gets port.
   *
   * @returns {Number} port.
   */
  getPort() {
    return this.props.port;
  }

  render() {
    return (
      <FormInput
        label="Port"
        name="port"
        placeholder={DEFAULT_PORT}
        changeHandler={this.onPortChanged.bind(this)}
        value={this.getPort()} />
    );
  }
}

export default PortInput;
