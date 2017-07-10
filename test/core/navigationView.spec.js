/* global describe, it */
import React from 'react';
import PropTypes from 'prop-types';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { NavigationView } from '../../src';

import * as componentStyles from '../../src/styles/navigationView.sass';

describe.skip('core component navigationView', () => {

    it('initialize by default', () => {
        const wrapper = shallow(<NavigationView />);
        expect(wrapper.hasClass(componentStyles.navigationView));
    });

    it('initialize by 1 child', () => {
        const ItemView = ({ children, next, prev }) => (
            <div>
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

        const wrapper = shallow(
            <NavigationView width={ 200 } height={ 100 }>
                <ItemView>对饮成三人</ItemView>
            </NavigationView>
        );
        expect(wrapper.find('navItem')).to.have.lengthOf(1);
        expect(wrapper.find('navItem').children('p').text()).to.equal('对饮成三人');
    });
});
