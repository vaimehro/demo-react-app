import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                Pure Component
            </div>
        );
    }
}

PureComp.propTypes = {};

export default PureComp;