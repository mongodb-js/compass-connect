const React = require('react');
const PropTypes = require('prop-types');
const Actions = require('../actions');
const FormItemInput = require('./form-item-input');

class SSLServerValidation extends React.Component {

  onSSLCAChanged(evt) {
    Actions.onSSLCAChanged(evt.target.value);
  }

  render() {
    return (
      <div id="ssl-server-validation" className="form-group">
        <FormItemInput
          label="Certificate Authority"
          name="ssl_ca"
          type="file"
          changeHandler={this.onSSLCAChanged.bind(this)}
          value={this.props.currentConnection.ssl_ca} />
      </div>
    );
  }
}

SSLServerValidation.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

SSLServerValidation.displayName = 'SSLServerValidation';

module.exports = SSLServerValidation;
