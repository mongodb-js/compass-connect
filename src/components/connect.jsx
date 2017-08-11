const React = require('react');
const FormConnectPort = require('./form-connect-port');
const FormReadPreferrence = require('./form-read-preferrence');

class Connect extends React.Component {

  render() {
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
            <FormConnectPort />
            <hr />
            <FormReadPreferrence />
            <hr />
          </form>
        </div>
      </div>
    );
  }
}

Connect.displayName = 'Connect';

module.exports = Connect;
