import React from 'react';
import { mount } from 'enzyme';

import LDAP from './ldap';

describe('<LDAP />', () => {
  describe('#render', () => {
    context('when the form is valid', () => {
      const connection = {
        ldapUsername: 'username',
        ldapPassword: 'password'
      };
      const component = mount(
        <LDAP currentConnection={connection} isValid />
      );

      it('renders the wrapper div', () => {
        expect(component.find('.form-group')).to.be.present();
      });

      it('renders the username input', () => {
        expect(component.find('input[name="ldap-username"]')).to.be.present();
      });

      it('renders the password input', () => {
        expect(component.find('input[name="ldap-password"]')).to.be.present();
      });
    });

    context('when the form is not valid', () => {
      context('when the username is empty', () => {
        const connection = {
          ldapUsername: '',
          ldapPassword: 'password'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the username is null', () => {
        const connection = {
          ldapUsername: null,
          ldapPassword: 'password'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the username is undefined', () => {
        const connection = {
          ldapPassword: 'password'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the password is empty', () => {
        const connection = {
          ldapUsername: 'username',
          ldapPassword: ''
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-password"]').prop('data-tip')).
            to.equal('Password is required');
        });
      });

      context('when the password is null', () => {
        const connection = {
          ldapUsername: 'username',
          ldapPassword: null
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-password"]').prop('data-tip')).
            to.equal('Password is required');
        });
      });

      context('when the password is undefined', () => {
        const connection = {
          ldapUsername: 'username'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-password"]').prop('data-tip')).
            to.equal('Password is required');
        });
      });
    });
  });
});
