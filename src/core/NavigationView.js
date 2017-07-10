import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clazz from 'classnames';
//import { autobind } from 'core-decorators';

import View from './View';

import * as componentStyles from '../styles/navigationView.sass';

class NavigationView extends View {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children, next, prev, index } = this.props;
        const elementTree = super.render();
        const newProps = {
            ...elementTree.props,
            ...{
                className: clazz(elementTree.props.className, componentStyles.navigationView),
                children: React.Children.map(children, (item, idx) => idx === index ? React.cloneElement(item, {
                    ...item.props,
                    ...{
                        next,
                        prev,
                    }
                }): void 0),
            },
        };

        return React.cloneElement(elementTree, newProps);
    }
}

const Controller = (View) =>
    class NavigationViewController extends Component {

        static propTypes = {
            index: PropTypes.number,
            beforeNext: PropTypes.func,
            afterNext: PropTypes.func,
            beforePrev: PropTypes.func,
            afterPrev: PropTypes.func,
            children: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.arrayOf(PropTypes.element),
            ]),
        };

        static defaultProps = {
            index: 0,
        };

        constructor(props, context) {
            super(props, context);
            // 初始化state
            const { index } = props;
            this.state = {
                // 子视图索引状态
                index,
            };

            this.next = this.next.bind(this);
            this.prev = this.prev.bind(this);
        }

        //@autobind
        next() {
            const index = this.state.index + 1;
            const { children } = this.props;

            if (index > React.Children.count(children) - 1) return;

            const { beforeNext, afterNext } = this.props;

            beforeNext && beforeNext();
            this.setState({ index });
            afterNext && afterNext();
        }

        //@autobind
        prev() {
            const index = this.state.index - 1;

            if (index < 0) return;

            const { beforePrev, afterPrev } = this.props;

            beforePrev && beforePrev();
            this.setState({ index });
            afterPrev && afterPrev();
        }

        componentWillReceiveProps(nextProps) {
            this.setState(() => ({
                index: nextProps.index,
            }));
        }

        render() {
            const newProps = {
                ...this.props,
                next: this.next,
                prev: this.prev,
                index: this.state.index,
            };
            return <View { ...newProps } />;
        }
    };

export default Controller(NavigationView);
