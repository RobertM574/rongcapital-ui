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
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="view">{ this.props.content }</div>
        );
    }
}

export default View;
