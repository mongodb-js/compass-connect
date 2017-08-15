const React = require('react');
const PropTypes = require('prop-types');
const FormAuthentication = require('./form-authentication');
const FormConnectHostPort = require('./form-connect-host-port');
const FormReplicaSetNameReadPreference = require('./form-replica-set-name-read-preference');

class Connect extends React.Component {

  render() {
    console.log('render connect');
    return (
      <div className="page connect">
        <div>
          <div className="sidebar panel"></div>
        </div>
        <div className="form-container">
          <header>
            <h2 data-test-id="connect-header">Connect to Host</h2>
          </header>
          <form data-test-id="connect-form">
            <FormConnectHostPort {...this.props} />
            <hr />
            <FormAuthentication {...this.props} />
            <hr />
            <FormReplicaSetNameReadPreference {...this.props} />
            <hr />
          </form>
        </div>
      </div>
    );
  }
}

Connect.propTypes = {
  currentConnection: PropTypes.object
};

Connect.displayName = 'Connect';

module.exports = Connect;
