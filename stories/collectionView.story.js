import React from 'react';
import { storiesOf } from '@storybook/react';

import { CollectionView } from '../src/core';

storiesOf('core.CollectionView', module)
    .add('initialize by default', () => ( 
        <CollectionView /> 
    ));
