import React from 'react';
import { storiesOf } from '@storybook/react';

import { View } from '../src/core';

storiesOf('core.View', module)
    .add('normal', () => (
        <View />
    ));
