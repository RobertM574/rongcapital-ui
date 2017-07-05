import React from 'react';
import { storiesOf } from '@storybook/react';

import { GridView } from '../src/core';

storiesOf('core.GridView', module)
    .add('initialize by default', () => (
        <GridView />
    ))
    .add('set row = 4 and columns = 3 and using 6 children', () => (
        <GridView width={ 200 } height={ 200 } rows={ 4 } columns={ 3 }>
            <div>item 0</div>
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
        </GridView>
    ))
    .add('set row = 4 and columns = 3 and using 7 children', () => (
        <GridView width={ 200 } height={ 200 } rows={ 4 } columns={ 3 }>
            <div>item 0</div>
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div>item 6</div>
        </GridView>
    ))
    .add('set row = 4 and columns = 3 and using 13 children', () => (
        <GridView width={ 300 } height={ 300 } rows={ 4 } columns={ 3 } cellLayout={ cellLayout }>
            <div>item 0</div>
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div>item 6</div>
            <div>item 7</div>
            <div>item 8</div>
            <div>item 9</div>
            <div>item 10</div>
            <div>item 11</div>
            <div>item 12</div>
        </GridView>
    ));

const cellLayout = (cells) => {
    cells[0].rowspan = 2;
    cells[0].colspan = 2;
    cells[1].isMounted = false;
    cells[3].isMounted = false;
    cells[4].isMounted = false;

    return cells;
};
