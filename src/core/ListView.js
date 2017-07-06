import React from 'react';
import clazz from 'classnames';

import memoize from 'lodash/memoize';

import CollectionView from './CollectionView';

import * as componentStyles from '../styles/listView.sass';

class ListView extends CollectionView {

    static propTypes = {
        ...CollectionView.propTypes,
    };

    static defaultProps = {
        ...CollectionView.defaultProps,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const elementTree = super.render();
        const { children } = elementTree.props;
        const newProps = {
            ...elementTree.props,
            ...{
                className: clazz(elementTree.props.className, componentStyles.listView),
                children: listLayout(React.Children.toArray(children)),
            },
        };

        return React.cloneElement(elementTree, newProps);
    }
}

const listLayout = memoize((items = []) => 
    <ul>
        { items.map((component, index) => <li key={ index }>{ component  }</li>) }
    </ul>
);

export default ListView;
