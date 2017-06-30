import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';

import { View } from '../../src';

describe('core component view', () => {

    it('view initialize', () => {
        const wrapper = shallow(<View />);
        expect(wrapper.type()).to.equal('div');
        expect(wrapper.text()).to.equal('Hello View');
        expect(wrapper.hasClass('view')).to.equal(true);
    });
});
