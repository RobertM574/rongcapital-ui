import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import defaults from 'lodash/defaults';
import memoize from 'lodash/memoize';

//  创建一个记忆函数用于合并尺寸样式
const mergeStyle = memoize(defaults);
const defaultStyles = {
    width: 'auto',
    height: 'auto',
};

class View extends PureComponent {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { width, height, children } = this.props;
        let styles = mergeStyle({ width, height }, defaultStyles);

        return (
            <div className="view" style={ styles }>{ children }</div>
        );
    }
}

export default View;
