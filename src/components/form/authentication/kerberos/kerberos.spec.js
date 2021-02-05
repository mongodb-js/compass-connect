import React from 'react';
import { mount } from 'enzyme';

import Kerberos from './kerberos';

describe('<Kerberos />', () => {
  describe('#render', () => {
    context('when the form is valid', () => {
      const connection = {
        kerberosPrincipal: 'principal',
        kerberosServiceName: 'service',
        kerberosCanonicalizeHostname: false
      };
      const component = mount(
        <Kerberos currentConnection={connection} isValid />
      );

      it('renders the wrapper div', () => {
        expect(component.find('.form-group')).to.be.present();
      });

      it('renders the principal input', () => {
        expect(component.find('input[name="kerberos-principal"]')).to.be.present();
      });

      it('renders the service name input', () => {
        expect(component.find('input[name="kerberos-service-name"]')).to.be.present();
      });

      it('renders the service name placeholder', () => {
        expect(component.find('input[name="kerberos-service-name"]').prop('placeholder')).to.equal('mongodb');
      });
    });

    context('when the form is not valid', () => {
      context('when the principal is empty', () => {
        const connection = {
          kerberosPrincipal: '',
          kerberosServiceName: 'service',
          kerberosCanonicalizeHostname: false
        };
        const component = mount(
          <Kerberos currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="kerberos-principal"]').prop('data-tip')).
            to.equal('Principal is required');
        });
      });

      context('when the principal is null', () => {
        const connection = {
          kerberosPrincipal: null,
          kerberosServiceName: 'service',
          kerberosCanonicalizeHostname: false
        };
        const component = mount(
          <Kerberos currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="kerberos-principal"]').prop('data-tip')).
            to.equal('Principal is required');
        });
      });

      context('when the principal is undefined', () => {
        const connection = {
          kerberosServiceName: 'service',
          kerberosCanonicalizeHostname: false
        };
        const component = mount(
          <Kerberos currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="kerberos-principal"]').prop('data-tip')).
            to.equal('Principal is required');
        });
      });
    });
  });
});
