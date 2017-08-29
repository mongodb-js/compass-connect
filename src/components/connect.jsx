const React = require('react');
const PropTypes = require('prop-types');
const { remote } = require('electron');
const Clipboard = remote.clipboard;
const dialog = remote.dialog;
const BrowserWindow = remote.BrowserWindow;
const shellToURL = require('mongodb-shell-to-url');
const Connection = require('mongodb-connection-model');
const AuthenticationSection = require('./authentication-section');
const HostPortSection = require('./host-port-section');
const ReplicaSetNameReadPreferenceSection = require('./replica-set-name-read-preference-section');
const SSLSection = require('./ssl-section');
const FavoriteSection = require('./favorite-section');
const Sidebar = require('./sidebar');
const SSHTunnelSection = require('./ssh-tunnel-section');
const Actions = require('../actions');

class Connect extends React.Component {

  constructor(props) {
    super(props);
    // @note: Durran: This is to ensure the same instance of the bound function is
    //   used in all event listeners so we can remove it later.
    this.checkClipboard = this.onCheckClipboard.bind(this);
  }

  componentDidMount() {
    // @note: Durran: This tells the window to focus on the clipboard when it gains focus.
    window.onfocus = this.checkClipboard;
    // @note: Durran: If the window was already focused when the component loads, we
    //   force the check.
    this.checkClipboard();
  }

  componentWillUnmount() {
    // @note: Durran: When the component is unmounted, we no longer need to listen for the
    //   focus events.
    window.removeEventListener('onfocus', this.checkClipboard);
  }

  autoFillFromClipboard() {
    // @note: Durran: Create a connection model from the clipboard text and remove the
    //   default name.
    const connection = Connection.from(this.clipboardText);
    connection.name = '';

    // @note: Durran: Auto set the SSL options (see COMPASS-1745, this is a part of that).
    if (this.clipboardText.match(/[?&]ssl=true/i)) {
      connection.ssl = 'SYSTEMCA';
    }
    // @note: Durran: Set the current connection on the store, this will trigger a render
    //   and the form will get filled in.
    Actions.onConnectionSelected(connection);
  }

  onCheckClipboard() {
    // @note: Durran: Get the current clipboard text.
    let clipboardText = Clipboard.readText();

    // @note: Durran: This tries to parse the weird shell connection strings in the docs
    //   for Atlas.
    const url = shellToURL(clipboardText);

    if (url) clipboardText = url;
    if (clipboardText === this.clipboardText) return;

    // @note: Durran: If we have a MongoDB URI, then prompt the user to confirm they
    //   want have the form filled out for them.
    if (Connection.isURI(clipboardText)) {
      dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
        type: 'info',
        message: 'MongoDB connection string detected',
        detail: 'Compass detected a MongoDB connection string in your '
          + 'clipboard. Do you want to use the connection string to '
          + 'fill out this form?',
        buttons: ['Yes', 'No']
      }, (response) => {
        if (response === 0) {
          this.clipboardText = clipboardText;
          this.autoFillFromClipboard();
        }
      });
    }
  };

  render() {
    return (
      <div className="page connect">
        <Sidebar {...this.props} />
        <div className="form-container">
          <header>
            <h2 data-test-id="connect-header">Connect to Host</h2>
          </header>
          <form data-test-id="connect-form">
            <HostPortSection {...this.props} />
            <hr />
            <AuthenticationSection {...this.props} />
            <hr />
            <ReplicaSetNameReadPreferenceSection {...this.props} />
            <hr />
            <SSLSection {...this.props} />
            <hr />
            <SSHTunnelSection {...this.props} />
            <hr />
            <FavoriteSection {...this.props } />
          </form>
        </div>
      </div>
    );
  }
}

Connect.propTypes = {
  currentConnection: PropTypes.object,
  connections: PropTypes.object
};

Connect.displayName = 'Connect';

module.exports = Connect;
