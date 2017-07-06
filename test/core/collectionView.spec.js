/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { CollectionView } from '../../src';

import * as viewStyles from '../../src/styles/view.sass';
import * as collectionViewStyles from '../../src/styles/collectionView.sass';

describe('core component collectionView', () => {

    it('initialize by default', () => {
        const wrapper = shallow(<CollectionView />);
        expect(wrapper.type()).to.equal('div');
        expect(wrapper.hasClass(viewStyles.view) && wrapper.hasClass(collectionViewStyles.collectionView)).to.equal(true);
    });

    it('initialize by one child', () => {
        const wrapper = shallow(
            <CollectionView>
                <div>Hello World</div>
            </CollectionView>
        );

        expect(wrapper.find('div').children('div')).to.have.lengthOf(1);
        expect(wrapper.text()).to.equal('Hello World');
    });

    it('initialize by more children and itemLayout', () => {
        const itemLayout = (item, index) => ( 
            React.cloneElement(item, {
                ...item.props,
                ...{
                    style: {
                        position: 'absolute',
                        display: 'inline-block',
                        right: 50 * index,
                        width: 50,
                        height: 50,
                    }
                }
            }));

        const wrapper = shallow(
            <CollectionView itemLayout={ itemLayout }>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
            </CollectionView>
        );

        expect(wrapper.find('div').children('div')).to.have.lengthOf(3);
        wrapper.find('div').children('div').forEach((item, index) => {
            const right = 50 * index;
            expect(item.html()).to.include(`right:${ right ? right + 'px' : 0}`);
            expect(item.html()).to.include('width:50px');
            expect(item.html()).to.include('height:50px');
            expect(item.html()).to.include('position:absolute');
            expect(item.html()).to.include('display:inline-block');
            expect(item.text()).to.equal('Hello');
        });
    });
});
