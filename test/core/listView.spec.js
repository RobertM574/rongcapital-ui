/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ListView } from '../../src';

import * as componentStyles from '../../src/styles/listView.sass';

describe('core component listView', () => {

    it('initialize by default', () => {
        const wrapper = shallow(<ListView />);
        expect(wrapper.hasClass(componentStyles.listView)).to.equal(true);
        expect(wrapper.find('ul')).to.have.lengthOf(1);
    });

    it('initialize by 6 items', () => {
        const wrapper = shallow(
            <ListView>
                <div>item 0</div>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
            </ListView>
        );
        expect(wrapper.find('li')).to.have.lengthOf(6);
        expect(wrapper.find('ul div')).to.have.lengthOf(6);
    });

    it('initialize by itemLayout', () => {
        const itemLayout = (item, index) => {
            if (index % 2 == 0) {
                return React.cloneElement(item, {
                    ...item.props,
                    ...{
                        style: {
                            backgroundColor: 'red',
                            color: 'white',
                        },
                    },
                });
            }

            return item;
        };

        const wrapper = shallow(
            <ListView itemLayout={ itemLayout }>
                <div>item 0</div>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
            </ListView>
        );

        expect(wrapper.find('ul div')).to.have.lengthOf(6);
        wrapper.find('ul div').forEach((item, index) => {
            if (index % 2 == 0) {
                expect(item.html()).to.include('color:white');
                expect(item.html()).to.include('background-color:red');
            }
        });
    });
});
