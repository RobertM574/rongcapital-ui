/* global describe, it */
import React from 'react';
import PropTypes from 'prop-types';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import { NavigationView } from '../../src';

import * as componentStyles from '../../src/styles/navigationView.sass';

const ItemView = ({ children, next, prev }) => (
    <div className="navItem">
        <p>{ children }</p>
        <div>
            <button onClick={ prev }>Prev</button>
            <button onClick={ next }>Next</button>
        </div>
    </div>
);

ItemView.propTypes = {
    children: PropTypes.string,
    prev: PropTypes.func,
    next: PropTypes.func,
};

describe.only('core component navigationView', () => {

    it('initialize by default', () => {
        const wrapper = shallow(<NavigationView />);
        expect(wrapper.hasClass(componentStyles.navigationView));
    });

    it('initialize by 1 child', () => {
        const wrapper = render(
            <NavigationView width={ 200 } height={ 100 }>
                <ItemView>对饮成三人</ItemView>
            </NavigationView>
        );

        expect(wrapper.children('div')).to.have.lengthOf(1);
        expect(wrapper.children('div').text()).to.equal('对饮成三人PrevNext');
    });
});
