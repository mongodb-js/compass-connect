const React = require('react');
const Actions = require('../actions');
const FormItemSelect = require('./form-item-select');
const FormConnectPort = require('./form-connect-port');
const FormItemInput = require('./form-item-input');

class Connect extends React.Component {

  onReadPreferrenceChanged(evt) {
    Actions.onReadPreferrenceChanged(evt.target.value);
  }

  onReplicaSetNameChanged(evt) {
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
              <FormConnectPort />
              <hr />
              <div id="read-preference" className="form-group">
                <FormItemInput
                  label="Replica Set Name"
                  name="replica_set_name"
                  placeholder=""
                  changeHandler={this.onReplicaSetNameChanged.bind(this)} />
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
