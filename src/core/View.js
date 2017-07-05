import React, { Component } from 'react';
import clazz from 'classnames';
import PropTypes from 'prop-types';
import defaults from 'lodash/defaults';
import memoize from 'lodash/memoize';

import * as componentStyles from '../styles/view.sass';

//  创建一个记忆函数用于合并尺寸样式
const mergeStyle = memoize(defaults);
const defaultStyles = {
    width: 'auto',
    height: 'auto',
};

class View extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        className: PropTypes.string,
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { width, height, className, children } = this.props;
        let styles = mergeStyle({ width, height }, defaultStyles);

        return (
            <div className={ clazz(className, componentStyles.view) } style={ styles }>{ children }</div>
        );
    }
}

export default View;
