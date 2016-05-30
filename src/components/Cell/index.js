import React from 'react';
import {size} from '../../Config';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            alive: false
        }
    },

    _getClasses: function () {
        return 'cell cell--' + (this.props.alive ? 'alive' : 'dead');
    },

    _getDynamicStyling: function () {
        return {
            width: size,
            height: size
        };
    },

    render: function () {
        return (
            <div className={this._getClasses()} style={this._getDynamicStyling()}></div>
        );
    }
});
