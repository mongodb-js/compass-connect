import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { shell } from 'electron';

import Actions from '../../../../actions';
import FormInput from '../../form-input';
import FormGroup from '../../form-group';

class ScramSha256 extends React.Component {
  static displayName = 'ScramSha256';

  static propTypes = {
    connectionModel: PropTypes.object.isRequired,
    isValid: PropTypes.bool
  };

  /**
   * Handles username change.
   *
   * @param {Object} evt - evt.
   */
  onUsernameChanged(evt) {
    Actions.onUsernameChanged(evt.target.value.trim());
  }

  /**
   * Handles password change.
   *
   * @param {Object} evt - evt.
   */
  onPasswordChanged(evt) {
    Actions.onPasswordChanged(evt.target.value);
  }

  /**
   * Handles authSource change.
   *
   * @param {Object} evt - evt.
   */
  onAuthSourceChanged(evt) {
    Actions.onAuthSourceChanged(evt.target.value);
  }

  /**
   * Opens "Authentication Database" documentation.
   */
  onSourceHelp() {
    shell.openExternal(
      'https://docs.mongodb.com/manual/core/security-users/#user-authentication-database'
    );
  }

  /**
   * Checks if there is MongoDB username error.
   *
   * @returns {String} In case of error returns an error message.
   */
  getUsernameError() {
    const connectionModel = this.props.connectionModel;

    if (!this.props.isValid && isEmpty(connectionModel.mongodbUsername)) {
      return true;
    }
  }

  /**
   * Checks if there is MongoDB password error.
   *
   * @returns {String} In case of error returns an error message.
   */
  getPasswordError() {
    const connection = this.props.connectionModel;

    if (!this.props.isValid && isEmpty(connection.mongodbPassword)) {
      return true;
    }
  }

  render() {
    return (
      <FormGroup id="scram-sha-256">
        <FormInput
          label="Username"
          name="username"
          error={this.getUsernameError()}
          changeHandler={this.onUsernameChanged.bind(this)}
          value={this.props.connectionModel.mongodbUsername || ''}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          error={this.getPasswordError()}
          changeHandler={this.onPasswordChanged.bind(this)}
          value={this.props.connectionModel.mongodbPassword || ''}
        />
        <FormInput
          label="Authentication Database"
          placeholder="admin"
          name="authSource"
          changeHandler={this.onAuthSourceChanged.bind(this)}
          value={this.props.connectionModel.mongodbDatabaseName || ''}
          linkHandler={this.onSourceHelp.bind(this)}
        />
      </FormGroup>
    );
  }
}

export default ScramSha256;
