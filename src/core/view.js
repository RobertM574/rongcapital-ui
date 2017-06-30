import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class View extends PureComponent {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="view">Hello View</div>
        );
    }
}

export default View;
