const React = require('react');
const Actions = require('../actions');
const FormItemInput = require('./form-item-input');
const FormItemSelect = require('./form-item-select');

class Connect extends React.Component {

  onHostnameChanged(evt) {
    Actions.onHostnameChanged(evt.target.value);
  }

  onPortChanged(evt) {
    Actions.onPortChanged(evt.target.value);
  }

  onReadPreferrenceChanged(evt) {
    Actions.onReadPreferrenceChanged(evt.target.value);
  }

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
            <div id="host-port" className="form-group">
              <FormItemInput
                label="Hostname"
                name="hostname"
                placeholder="localhost"
                changeHandler={this.onHostnameChanged.bind(this)} />
              <FormItemInput
                label="Port"
                name="port"
                placeholder="27017"
                changeHandler={this.onPortChanged.bind(this)} />
                <hr />
              <FormItemInput
                label="Replica Set Name"
                name="replica_set_name"
                placeholder=""
                changeHandler={this.onPortChanged.bind(this)} />
              <FormItemSelect
                label="Read Preference"
                name="read_preference"
                options={[
                  {'primary': 'Primary'},
                  {'primaryPreferred': 'Primary Preferred'},
                  {'secondary': 'Secondary'},
                  {'secondaryPreferred': 'Secondary Preferred'},
                  {'nearest': 'Nearest'}
                ]}
                changeHandler={this.onReadPreferrenceChanged.bind(this)} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Connect.displayName = 'Connect';

module.exports = Connect;
