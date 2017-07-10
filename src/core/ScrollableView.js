import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clazz from 'classnames';

import View from './View';

import * as componentStyles from '../styles/scrollableView.sass';

class ScrollableView extends View {

    static propTypes = {
        children: PropTypes.element,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const elementTree = super.render();
        const newProps = {
            ...elementTree.props,
            ...{
                className: clazz(elementTree.props.className, componentStyles.scrollableView),
            },
        };

        return React.cloneElement(elementTree, newProps);
    }
}

const Controller = (View) => 
    class ScrollableViewController extends Component {
        constructor(props, context) {
            super(props, context);
        }

        render() {
            return <View {...this.props} />;
        }
    };

export default Controller(ScrollableView);
