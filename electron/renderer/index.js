require('babel-register')({ extensions: ['.jsx'] });

const app = require('hadron-app');
const React = require('react');
const ReactDOM = require('react-dom');
const AppRegistry = require('hadron-app-registry');

const entryPoint = require('../../');
const appRegistry = new AppRegistry();
const ConnectComponent = require('../../lib/components');

const electron = require('electron');
const remote = electron.remote;
const electronApp = remote.app;
const dialog = remote.dialog;
const Clipboard = remote.clipboard;
const BrowserWindow = remote.BrowserWindow;
const shellToURL = require('mongodb-shell-to-url');
const MongoDBConnection = require('mongodb-connection-model');
const Connection = require('../../src/models/connection');

global.hadronApp = app;
global.hadronApp.appRegistry = appRegistry;
entryPoint.activate(appRegistry);

ReactDOM.render(
  React.createElement(ConnectComponent),
  document.getElementById('container')
);

checkClipboard()

function checkClipboard() {
  var clipboardText = Clipboard.readText();
  // first try to parse with shell-to-url package
  // example uri: mongodb://127.0.0.1:27017
  const url = shellToURL(clipboardText);
  if (url) {
    clipboardText = url;
  }
  if (clipboardText === this.clipboardText) {
    // we have seen this value already, don't ask user again
    return;
  }
  this.clipboardText = clipboardText;
  if (MongoDBConnection.isURI(clipboardText)) {
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
      type: 'info',
      message: 'MongoDB connection string detected',
      detail: 'Compass detected a MongoDB connection string in your '
        + 'clipboard. Do you want to use the connection string to '
        + 'fill out this form?',
      buttons: ['Yes', 'No']
    }, function(response) {
      if (response === 0) {
        autofillFromClipboard();
      }
    }.bind(this));
  }
}

function autofillFromClipboard() {
  this.connection = Connection.from(this.clipboardText);
  // don't use "Local" as favorite name, keep field empty
  this.connection.name = '';
  // if the URI contains ssl=true, switch to SYSTEMCA by default
  if (this.clipboardText.match(/[?&]ssl=true/i)) {
    this.connection.ssl = 'SYSTEMCA';
  }
  this.updateForm();
  // @note: durran: This fixes not being able to save a new favorite
  //  from a collection that was auto-filled from the clipboard. Needed
  //  to be instantiated as new before saving otherwise it would get an
  //  error saying 'url' needed to be defined.
  this.connection = null;
}

function updateForm() {
  console.log("Time to update form")
 }
