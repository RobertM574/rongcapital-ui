import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';

import { View } from '../../src';
import * as componentStyles from '../../src/styles/view.sass';

describe('core component view', () => {

    it('view initialize by default', () => {
        const wrapper = shallow(<View />);
        expect(wrapper.type()).to.equal('div');
        expect(wrapper.hasClass(componentStyles.view)).to.equal(true);
    });

    it('view initialize with width = 200', () => {
        const wrapper = shallow(<View width={ 200 } />)
        expect(wrapper.html()).to.include('width:200px');
    });

    it('view initialize with height = 300', () => {
        const wrapper = shallow(<View height={ 300 } />)
        expect(wrapper.html()).to.include('height:300px');
    });

    it('view initialize with both of all', () => {
        const wrapper = shallow(<View width={200} height={300} />);
        expect(wrapper.html()).to.include('width:200px;height:300px');
    });

    it('view initialize with children of text', () => {
        const wrapper = shallow(<View>Hello</View>);
        expect(wrapper.text()).to.equal('Hello');
    });

    it('view initialize with children of element', () => {
        const wrapper = shallow(<View><div></div></View>);
        expect(wrapper.find('div').children('div')).to.have.lengthOf(1);
    });
});
