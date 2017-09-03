const React = require('react');
const PropTypes = require('prop-types');
const HostPortSection = require('./host-port-section');
const AuthenticationSection = require('./authentication-section');
const ReplicaSetNameReadPreferenceSection = require('./replica-set-name-read-preference-section');
const SSLSection = require('./ssl-section');
const SSHTunnelSection = require('./ssh-tunnel-section');
const FavoriteSection = require('./favorite-section');

class Form extends React.Component {

  render() {
    return (
      <form data-test-id="connect-form">
        <HostPortSection {...this.props} />
        <hr />
        <AuthenticationSection {...this.props} />
        <hr />
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

Form.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

Form.displayName = 'Form';

module.exports = Form;
