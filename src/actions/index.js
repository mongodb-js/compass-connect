const Reflux = require('reflux');

const ConnectActions = Reflux.createActions([
  'onHostnameChanged',
  'onPortChanged',
  'onReadPreferenceChanged',
  'onReplicaSetNameChanged',
  'onAuthenticationMethodChanged',
  'onUsernameChanged',
  'onPasswordChanged',
  'onAuthSourceChanged',
  'onSSLMethodChanged',
  'onSSLCAChanged',
  'onSSLCertificateChanged',
  'onSSLPrivateKeyChanged',
  'onSSLPrivateKeyPasswordChanged',
  'onSSHTunnelPasswordChanged',
  'onSSHTunnelPassphraseChanged',
  'onSSHTunnelHostnameChanged',
  'onSSHTunnelUsernameChanged',
  'onSSHTunnelPortChanged',
  'onSSHTunnelIdentityFileChanged',
  'onSSHTunnelChanged'
]);

module.exports = ConnectActions;
