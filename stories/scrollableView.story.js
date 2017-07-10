import React from 'react';
import { storiesOf } from '@storybook/react';

import { ScrollableView } from '../src/core';

storiesOf('core.ScrollableView', module)
    .add('initialize by default', () => (
        <ScrollableView />
    ));
