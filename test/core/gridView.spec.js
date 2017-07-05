/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { GridView } from '../../src';

import * as componentStyles from '../../src/styles/gridView.sass';

describe.only('core component gridView', () => {
    
    it('gridView initialize by default', () => {
        const wrapper = shallow(<GridView />);
        expect(wrapper.hasClass(componentStyles.gridView)).to.equal(true);
        expect(wrapper.find('div').children('table')).to.have.lengthOf(1);
    });

    it('gridView initialize by className', () => {
        const wrapper = shallow(<GridView className="abc" />);
        expect(wrapper.hasClass("abc")).to.equal(true);
        expect(wrapper.hasClass(componentStyles.gridView)).to.equal(true);
    });

    it('gridView initialize by 3 rows, 2 columns and 4 children', () => {
        const wrapper = shallow(
            <GridView rows={ 3 } columns={ 2 }>
                <div>item 0</div>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
            </GridView>
        );
        expect(wrapper.find('tr')).to.have.lengthOf(3);
        expect(wrapper.find('td')).to.have.lengthOf(6);
        expect(wrapper.find('table div')).to.have.lengthOf(4);
        wrapper.find('table div').forEach((item, index) => 
            expect(item.text()).to.equal(`item ${index}`))
    });

    it('gridView initialize by 3 rows, 2 columns and 9 children', () => {
        const wrapper = shallow(
            <GridView rows={ 3 } columns={ 2 }>
                <div>item 0</div>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
                <div>item 6</div>
                <div>item 7</div>
                <div>item 8</div>
            </GridView>
        );
        expect(wrapper.find('table div')).to.have.lengthOf(6);
        wrapper.find('table div').forEach((item, index) => 
            expect(item.text()).to.equal(`item ${index}`))
    });

    it('gridView initialize by 3 rows, 2 columns and cellLayout func', () => {
        const cellLayout = (cells) => (cells[0].rowspan = 2, cells[2].isMounted = false, cells);
        const wrapper = shallow(
            <GridView rows={ 3 } columns={ 2 }>
                <div>item 0</div>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
            </GridView>
        );
        expect(wrapper.find('table div')).to.have.lengthOf(5);
        wrapper.find('table div').forEach((item, index) => 
            expect(item.text()).to.equal(`item ${index}`))
    });
});
