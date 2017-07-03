import React, { PureComponent } from 'react';

import View from './View';

class CollectionView extends View {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const elementTree = super.render();

        return elementTree;
    }
}

export default CollectionView;
