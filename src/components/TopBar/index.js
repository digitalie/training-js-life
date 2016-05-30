import React from 'react';

export default React.createClass({

    getDefaultProps: function () {
        return {
            callback: function () {
            }
        }
    },

    getInitialState() {
        return {
            enabled: false
        };
    },


    _toggleEnabled: function () {
        this.setState({
            enabled: !this.state.enabled
        });
        this.props.callback();
    },

    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Game of Life</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a onClick={this._toggleEnabled} href="#">{this.state.enabled ? 'Stop' : 'Start'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
