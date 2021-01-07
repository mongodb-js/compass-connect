import { shallow } from 'enzyme';
import AppRegistry from 'hadron-app-registry';
import hadronApp from 'hadron-app';
import Connection, { ConnectionCollection } from 'mongodb-connection-model';
import React from 'react';

import Connect from '../../../src/components/connect';

import styles from '../../../src/components/connect.less';

describe('Connect [Component]', () => {
  const connection = new Connection();
  const connections = new ConnectionCollection();
  const appRegistry = new AppRegistry();

  class StatusPlugin extends React.Component {
    render() {
      return (<div id="statusPlugin">Status</div>);
    }
  }

  const ROLE = {
    name: 'Status',
    component: StatusPlugin
  };

  context('when the app is not connected', () => {
    let component;

    beforeEach(() => {
      component = shallow(
        <Connect currentConnection={connection} connections={connections} isValid />
      );
    });

    afterEach(() => {
      component = null;
    });

    before(() => {
      global.hadronApp = hadronApp;
      global.hadronApp.appRegistry = appRegistry;
      global.hadronApp.appRegistry.registerRole('Application.Status', ROLE);
    });

    it('renders the container', () => {
      expect(component.find(`.${styles.connect}`)).to.exist;
    });

    it('renders the header', () => {
      expect(component.find('h2').text()).to.be.equal('New Connection');
    });

    it('renders the form container', () => {
      expect(component.find(`.${styles['form-container']}`)).to.exist;
    });
  });

  context('when the app is connected', () => {
    let component;

    beforeEach(() => {
      component = shallow(
        <Connect
          currentConnection={connection}
          connections={connections}
          isConnected
          isValid />
      );
    });

    afterEach(() => {
      component = null;
    });

    before(() => {
      global.hadronApp = hadronApp;
      global.hadronApp.appRegistry = appRegistry;
      global.hadronApp.appRegistry.registerRole('Application.Status', ROLE);
    });

    it('renders the success header', () => {
      expect(component.find('.success')).to.exist;
    });
  });
});
