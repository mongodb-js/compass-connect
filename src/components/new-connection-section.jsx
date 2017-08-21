const React = require('react');
const Actions = require('../actions');

class NewConnectionSection extends React.Component {

  onNewConnectionClicked() {
    Actions.resetConnection();
  }

  render() {
    return (
      <div className="connect-sidebar-new-connection connect-sidebar-new-connection-is-active">
        <div className="connect-sidebar-header" onClick={this.onNewConnectionClicked.bind(this)}>
          <i className="fa fa-fw fa-bolt" />
          <span>New Connection</span>
        </div>
      </div>
    );
  }
}

NewConnectionSection.displayName = 'NewConnectionSection';

module.exports = NewConnectionSection;
