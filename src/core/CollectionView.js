import React from 'react';
import clazz from 'classnames';
import PropTypes from 'prop-types';

import View from './View';
import * as componentStyles from '../styles/collectionView.sass';

const noop = arg => arg;

class CollectionView extends View {

    static defaultProps = {
        itemLayout: noop,
    };

    static propTypes = {
        itemLayout: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const elementTree = super.render();
        const props = elementTree.props;

        const newProps = {
            ...props,
            ...{
                className: clazz(props.className, componentStyles.collectionView),
            },
        };

        const { children, ...others } = this.props;
        const { itemLayout } = others;

        const newChildren = React.Children.map(children, itemLayout);

        return React.cloneElement(elementTree, newProps, newChildren);
    }
}

export default CollectionView;
