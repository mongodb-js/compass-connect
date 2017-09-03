const React = require('react');
const PropTypes = require('prop-types');
const FormGroup = require('./form-group');
const HostInput = require('./host-input');
const PortInput = require('./port-input');
const Authentication = require('./authentication-section');
const ReplicaSetNameReadPreferenceSection = require('./replica-set-name-read-preference-section');
const SSLSection = require('./ssl-section');
const SSHTunnelSection = require('./ssh-tunnel-section');
const FavoriteSection = require('./favorite-section');

class ConnectForm extends React.Component {

  render() {
    return (
      <form data-test-id="connect-form">
        <FormGroup id="host-port" separator>
          <HostInput {...this.props} />
          <PortInput {...this.props} />
        </FormGroup>
        <Authentication {...this.props} />
        <ReplicaSetNameReadPreferenceSection {...this.props} />
        <hr />
        <SSLSection {...this.props} />
        <hr />
        <SSHTunnelSection {...this.props} />
        <hr />
        <FavoriteSection {...this.props } />
      </form>
    );
  }
}

ConnectForm.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

ConnectForm.displayName = 'ConnectForm';

module.exports = ConnectForm;
