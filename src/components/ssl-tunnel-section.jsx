const React = require('react');
const PropTypes = require('prop-types');
const Actions = require('../actions');
const FormItemSelect = require('./form-item-select');

class SSLTunnelSection extends React.Component {

  onSSLTunnelChanged(evt) {
    Actions.onSSLTunnelChanged(evt.target.value);
  }

  render() {
    return (
      <div id="ssl-tunnel" className="form-group">
        <FormItemSelect
          label="SSL Tunnel"
          name="ssl_tunnel"
          options={[
            {'off': 'Off'},
            {'usePassword': 'Use Password'},
            {'useIdentityFile': 'Use Idendity File'}
          ]}
          // TODO show/hide options for usePassword and useIdentityFile
          changeHandler={this.onSSLTunnelChanged.bind(this)}
          value={this.props.currentConnection.ssl_tunnel} />
      </div>
    );
  }
}

SSLTunnelSection.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

SSLTunnelSection.displayName = 'SSLTunnelSection';

module.exports = SSLTunnelSection;
