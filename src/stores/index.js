const Reflux = require('reflux');
const Actions = require('../actions');
const Connection = require('../models/connection');
const StateMixin = require('reflux-state-mixin');

const ConnectStore = Reflux.createStore({
  mixins: [StateMixin.store],

  listenables: Actions,

  onAuthenticationMethodChanged(method) {
    this.state.currentConnection.authentication = method;
    this.trigger(this.state);
  },

  onUsernameChanged(username) {
    this.state.currentConnection.mongodb_username = username;
    this.trigger(this.state);
  },

  onPasswordChanged(password) {
    this.state.currentConnection.mongodb_password = password;
    this.trigger(this.state);
  },

  onAuthSourceChanged(authSource) {
    this.state.currentConnection.mongodb_database_name = authSource;
    this.trigger(this.state);
  },

  onHostnameChanged(hostname) {
    this.state.currentConnection.hostname = hostname;
    this.trigger(this.state);
  },

  onPortChanged(port) {
    this.state.currentConnection.port = port;
    this.trigger(this.state);
  },

  onReadPreferenceChanged(readPreference) {
    this.state.currentConnection.read_preference = readPreference;
    this.trigger(this.state);
  },

  onReplicaSetNameChanged(replicaSetName) {
    this.state.currentConnection.replica_set_name = replicaSetName;
    this.trigger(this.state);
  },

  onSSLMethodChanged(method) {
    this.state.currentConnection.ssl = method;
    this.trigger(this.state);
  },

  onSSLCAChanged(files) {
    this.state.currentConnection.ssl_ca = files;
    this.trigger(this.state);
  },

  onSSLCertificateChanged(files) {
    this.state.currentConnection.ssl_certificate = files;
    this.trigger(this.state);
  },

  onSSLPrivateKeyChanged(files) {
    this.state.currentConnection.ssl_private_key = files;
    this.trigger(this.state);
  },

  onSSLPrivateKeyPasswordChanged(password) {
    this.state.currentConnection.ssl_private_key_password = password;
    this.trigger(this.state);
  },

  onSSLTunnelChanged(tunnel) {
    this.state.currentConnection.ssl_tunnel = tunnel;
    this.trigger(this.state);
  },

  getInitialState() {
    return {
      currentConnection: new Connection(),
      connections: []
    };
  }
});

module.exports = ConnectStore;
