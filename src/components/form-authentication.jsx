const React = require('react');
const PropTypes = require('prop-types');
const FormItemSelect = require('./form-item-select');

class FormAuthentication extends React.Component {

  constructor(props) {
    super(props);
    this.setupAuthenticationRoles();
  }

  onAuthMethodChanged(evt) {
    return evt.target.value;
  }

  setupAuthenticationRoles() {
    this.roles = global.hadronApp.appRegistry.getRole('Connect.AuthenticationMethod');
    this.selectOptions = this.roles.map((role) => {
      return role.selectOption;
    });
  }

  render() {
    return (
      <div id="authentication" className="form-group">
        <FormItemSelect
          label="Authentication"
          name="authentication"
          options={this.selectOptions}
          changeHandler={this.onAuthMethodChanged.bind(this)} />
      </div>
    );
  }
}

FormAuthentication.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

FormAuthentication.displayName = 'FormAuthentication';

module.exports = FormAuthentication;
