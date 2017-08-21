const React = require('react');
const PropTypes = require('prop-types');
const map = require('lodash.map');

class FavoriteListSection extends React.Component {

  renderFavorites() {
    const favorites = this.props.connections.filter((connection) => {
      return connection.is_favorite;
    });
    return map(favorites, (favorite, i) => {
      return (
        <li className="connect-sidebar-list-item" key={i} title="">
          <div className="connect-sidebar-list-item-last-used">{favorite.last_used || 'Never'}</div>
          <div className="connect-sidebar-list-item-name">{favorite.name}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="connect-sidebar-connections-favorites">
        <div className="connect-sidebar-header">
          <i className="fa fa-fw fa-star" />
          <span>Favorites</span>
        </div>
        <ul className="connect-sidebar-list">
          {this.renderFavorites()}
        </ul>
      </div>
    );
  }
}

FavoriteListSection.propTypes = {
  connections: PropTypes.object.isRequired
};

FavoriteListSection.displayName = 'FavoriteListSection';

module.exports = FavoriteListSection;
