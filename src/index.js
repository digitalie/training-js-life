import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';
import Grid from './components/Grid';
import TopBar from './components/TopBar';
import CycleOfLife from './CycleOfLife';
import {matrix} from './Config';

require('./style.less');

let App = React.createClass({

    getInitialState() {
        return {
            matrix: matrix,
            playback: {
                enabled: false,
                timeout: 500,
                callback: this._cycleOfLife
            }
        };
    },

    _toggleEnabled: function () {
        this.setState({
            playback: {
                enabled: !this.state.playback.enabled,
                timeout: this.state.playback.timeout,
                callback: this._cycleOfLife
            }
        });
    },

    _cycleOfLife: function () {
        this.setState({
            matrix: CycleOfLife(this.state.matrix)
        });
    },

    render: function () {
        return (
            <div id="root">
                <TopBar enabled={this.state.enabled} callback={this._toggleEnabled} />
                <Grid map={this.state.matrix}/>
                <ReactInterval {...this.state.playback} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
