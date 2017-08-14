const Reflux = require('reflux');

const ConnectActions = Reflux.createActions([
  'onHostnameChanged',
  'onPortChanged',
  'onReadPreferenceChanged'
]);

module.exports = ConnectActions;
