import React from 'react';
import { storiesOf } from '@storybook/react';

import { View } from '../src/core';

storiesOf('core.View', module)
    .add('initialize by default', () => (
        <View />
    ))
    .add('set width = 200', () => (
        <View width={ 200 } />
    ))
    .add('set height = 300', () => (
        <View height={ 300 } />
    ))
    .add('set both of all', () => (
        <View width={ 150 } height={ 150 } />
    ));
