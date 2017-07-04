import React from 'react';
import { storiesOf } from '@storybook/react';

import { CollectionView } from '../src/core';

storiesOf('core.CollectionView', module)
    .add('initialize by default', () => ( 
        <CollectionView /> 
    ))
    .add('initialize by one child', () => (
        <CollectionView width={ 500 } height={ 300 }>
            <div>Hello World</div>
        </CollectionView>
    ))
    .add('initialize by more childen and itemLayout', () => (
        <CollectionView width={ 500 } height={ 300 } itemLayout={ itemLayout }>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </CollectionView>
    ));

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
