const React = require('react');
const Actions = require('../actions');
const FormItemInput = require('./form-item-input');

class FormConnectPort extends React.Component {

  onHostnameChanged(evt) {
    Actions.onHostnameChanged(evt.target.value);
  }

  onPortChanged(evt) {
    Actions.onPortChanged(evt.target.value);
  }

  render() {
    return (
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
      </div>
    );
  }
}


FormItemInput.displayName = 'FormConnectPort';

module.exports = FormConnectPort;
