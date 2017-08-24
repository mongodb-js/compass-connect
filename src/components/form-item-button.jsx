const React = require('react');
const PropTypes = require('prop-types');

class FormItemButton extends React.Component {
  render() {
    return (
      <div className="form-item">
        <button
          type={this.props.type}
          name={this.props.name}
          data-hook={this.props.data_hook}
          data-test-id={this.props.data_test_id}
          className="btn btn-sm btn-primary">{this.props.text}</button>
      </div>
    );
  }
}

FormItemButton.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data_hook: PropTypes.string.isRequired,
  data_test_id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

FormItemButton.displayName = 'FormItemButton';

module.exports = FormItemButton;
