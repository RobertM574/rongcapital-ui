import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import * as styles from './style.sass';

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
            <div className={ styles.view }>Hello View</div>
        );
    }
}

export default View;
