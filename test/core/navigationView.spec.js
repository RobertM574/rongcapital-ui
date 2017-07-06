/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NavigationView } from '../../src';

import * as componentStyles from '../../src/styles/navigationView.sass';

describe.only('core component navigationView', () => {

    it('initialize by default', () => {
        const wrapper = shallow(<NavigationView />);
        expect(wrapper.hasClass(componentStyles.navigationView));
    });
});
