const ConnectComponent = require('./lib/components');
const MongoDBAuthentication = require('./lib/components/mongodb-authentication');
const SSLServerValidation = require('./lib/components/ssl-server-validation');
const ConnectActions = require('./lib/actions');
const ConnectStore = require('./lib/stores');

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'Connect',
  component: ConnectComponent
};

/**
 * No auth role has no component.
 */
const NO_AUTH_ROLE = {
  name: 'NONE',
  selectOption: { NONE: 'None' }
};

/**
 * No auth role has no component.
 */
const MONGODB_AUTH_ROLE = {
  name: 'MONGODB',
  selectOption: { MONGODB: 'Username / Password' },
  component: MongoDBAuthentication
};

/**
 * No ssl role has no component.
 */
const NO_SSL_ROLE = {
  name: 'NONE',
  selectOption: { NONE: 'None' }
};

/**
 * System CA ssl role has no component.
 */
const SYSTEM_CA_SSL_ROLE = {
  name: 'SYSTEMCA',
  selectOption: { SYSTEMCA: 'System CA / Atlas Deployment' }
};

/**
 * System CA ssl role has no component.
 */
const SERVER_VALIDATION_SSL_ROLE = {
  name: 'SERVER',
  selectOption: { SERVER: 'Server Validation' },
  component: SSLServerValidation
};

/**
 * Activate all the components in the  Mongodb Js Compass Connect package.
 */
function activate(appRegistry) {
  appRegistry.registerRole('Application.Connect', ROLE);
  appRegistry.registerRole('Connect.SSLMethod', NO_SSL_ROLE);
  appRegistry.registerRole('Connect.SSLMethod', SYSTEM_CA_SSL_ROLE);
  appRegistry.registerRole('Connect.SSLMethod', SERVER_VALIDATION_SSL_ROLE);
  appRegistry.registerRole('Connect.AuthenticationMethod', NO_AUTH_ROLE);
  appRegistry.registerRole('Connect.AuthenticationMethod', MONGODB_AUTH_ROLE);
  appRegistry.registerAction('Connect.Actions', ConnectActions);
  appRegistry.registerStore('Connect.Store', ConnectStore);
}

/**
 * Deactivate all the components in the  Mongodb Js Compass Connect package.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Application.Connect', ROLE);
  appRegistry.deregisterRole('Connect.SSLMethod', NO_SSL_ROLE);
  appRegistry.deregisterRole('Connect.SSLMethod', SYSTEM_CA_SSL_ROLE);
  appRegistry.deregisterRole('Connect.SSLMethod', SERVER_VALIDATION_SSL_ROLE);
  appRegistry.deregisterRole('Connect.AuthenticationMethod', NO_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.AuthenticationMethod', MONGODB_AUTH_ROLE);
  appRegistry.deregisterAction('Connect.Actions');
  appRegistry.deregisterStore('Connect.Store');
}

module.exports = ConnectComponent;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
