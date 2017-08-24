const React = require('react');
const PropTypes = require('prop-types');
const AuthenticationSection = require('./authentication-section');
const HostPortSection = require('./host-port-section');
const ReplicaSetNameReadPreferenceSection = require('./replica-set-name-read-preference-section');
const SSLSection = require('./ssl-section');
const FavoriteSection = require('./favorite-section');
const Sidebar = require('./sidebar');
const SSHTunnelSection = require('./ssh-tunnel-section');
const FormItemButton = require('./form-item-button');

class Connect extends React.Component {

  render() {
    return (
      <div className="page connect">
        <Sidebar {...this.props} />
        <div className="form-container">
          <header>
            <h2 data-test-id="connect-header">Connect to Host</h2>
          </header>
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
            <FormItemButton
              type="submit"
              name="connect"
              data_hook="connect-button"
              data_test_id="connect-button"
              text="Connect" />
          </form>
        </div>
      </div>
    );
  }
}

Connect.propTypes = {
  currentConnection: PropTypes.object,
  connections: PropTypes.object
};

Connect.displayName = 'Connect';

module.exports = Connect;
