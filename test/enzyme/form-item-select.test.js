const React = require('react');
const chai = require('chai');
const expect = chai.expect;
const chaiEnzyme = require('chai-enzyme');
const { shallow } = require('enzyme');
const FormItemSelect = require('../../src/components/form-item-select');

chai.use(chaiEnzyme());

describe('<FormItemSelect />', () => {
  describe('#render', () => {
    const component = shallow(<FormItemSelect label="Test" name="testing" options={[{'mongodb': 'MongoDB'}]} />);

    it('renders the wrapper div', () => {
      expect(component.find('.form-item')).to.be.present();
    });

    it('renders the label', () => {
      expect(component.find('.form-item-label').text()).to.equal('Test');
    });

    it('renders the selection name', () => {
      expect(component.find('.form-control').prop('name')).to.equal('testing');
    });

    it('renders the select options', () => {
      // TODO this doesn't seem right
      expect(component.find('.form-control option')).to.be.present();
    });
  });
});
