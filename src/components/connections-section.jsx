const React = require('react');
const PropTypes = require('prop-types');
const FavoriteListSection = require('./favorite-list-section');
const RecentListSection = require('./recent-list-section');

class ConnectionsSection extends React.Component {

  render() {
    return (
      <div className="connect-sidebar-connections">
        <FavoriteListSection {...this.props} />
        <RecentListSection {...this.props} />
      </div>
    );
  }
}

ConnectionsSection.propTypes = {
  connections: PropTypes.object.isRequired
};

ConnectionsSection.displayName = 'ConnectionsSection';

module.exports = ConnectionsSection;
