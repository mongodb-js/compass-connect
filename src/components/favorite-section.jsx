const React = require('react');
const PropTypes = require('prop-types');
const Actions = require('../actions');
const FormItemInput = require('./form-item-input');

class FavoriteSection extends React.Component {

  onNameChanged(evt) {
    Actions.onFavoriteNameChanged(evt.target.value);
  }

  render() {
    return (
      <div id="favorite" className="form-group">
        <FormItemInput
          label="Favorite Name"
          name="favorite_name"
          placeholder="e.g. Shared Dev, QA Box, PRODUCTION"
          link="https://docs.mongodb.com/compass/current/connect/"
          changeHandler={this.onNameChanged.bind(this)}
          value={this.props.currentConnection.name} />
      </div>
    );
  }
}

FavoriteSection.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

FavoriteSection.displayName = 'FavoriteSection';

module.exports = FavoriteSection;
