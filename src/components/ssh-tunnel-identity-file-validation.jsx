const React = require('react');
const PropTypes = require('prop-types');
const Actions = require('../actions');
const FormFileInput = require('./form-file-input');
const FormItemInput = require('./form-item-input');

class SSHTunnelIdentityFileValidation extends React.Component {

  onSSHTunnelHostnameChanged(evt) {
    Actions.onSSHTunnelHostnameChanged(evt.target.value);
  }

  onSSHTunnelPortChanged(evt) {
    Actions.onSSHTunnelPortChanged(evt.target.value);
  }

  onSSHTunnelUsernameChanged(evt) {
    Actions.onSSHTunnelUsernameChanged(evt.target.value);
  }

  onSSHTunnelIdentityFileChanged(paths) {
    Actions.onSSHTunnelIdentityFileChanged(paths);
  }

  onSSHTunnelPassphraseChanged(evt) {
    Actions.onSSHTunnelPassphraseChanged(evt.target.value);
  }

  render() {
    return (
      <div id="ssh_tunnel-IDENTITY_FILE" className="form-group">
        <FormItemInput
          label="SSH Hostname"
          name="ssh_tunnel_hostname"
          changeHandler={this.onSSHTunnelHostnameChanged.bind(this)}
          value={this.props.currentConnection.ssh_tunnel_hostname}
          link="https://docs.mongodb.com/compass/current/connect" />
        <FormItemInput
          label="SSH Tunnel Port"
          name="ssh_tunnel_port"
          changeHandler={this.onSSHTunnelPortChanged.bind(this)}
          value={this.props.currentConnection.ssh_tunnel_port} />
        <FormItemInput
          label="SSH Username"
          name="ssh_tunnel_username"
          changeHandler={this.onSSHTunnelUsernameChanged.bind(this)}
          value={this.props.currentConnection.ssh_tunnel_username} />
        <FormFileInput
          label="SSH Identity File"
          id="ssh_tunnel_identity_file"
          changeHandler={this.onSSHTunnelIdentityFileChanged.bind(this)}
          values={this.props.currentConnection.ssh_tunnel_identity_file} />
        <FormItemInput
          label="SSH Passphrase"
          name="ssh_tunnel_passphrase"
          changeHandler={this.onSSHTunnelPassphraseChanged.bind(this)}
          value={this.props.currentConnection.ssh_tunnel_passphrase} />
      </div>
    );
  }
}

SSHTunnelIdentityFileValidation.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

SSHTunnelIdentityFileValidation.displayName = 'SSHTunnelIdentityFileValidation';

module.exports = SSHTunnelIdentityFileValidation;
