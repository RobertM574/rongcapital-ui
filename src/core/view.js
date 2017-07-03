import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class View extends PureComponent {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        content: PropTypes.string,
    };

    static defaultProps = {
        content: "Hello View",
        width: 100,
        height: 100,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { width, height } = this.props;

        return (
            <div className="view" style={{ minWidth: width, minHeight: height }}>{ this.props.content }</div>
        );
    }
}

export default View;
