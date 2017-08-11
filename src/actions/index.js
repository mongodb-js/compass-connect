const Reflux = require('reflux');

const ConnectActions = Reflux.createActions([
  'onHostnameChanged',
  'onPortChanged',
  'onReadPreferrenceChanged'
]);

module.exports = ConnectActions;
