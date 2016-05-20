import React from 'react';
import ReactDOM from 'react-dom';
import Config from './config.json';
import Cell from './components/Cell';

let App = React.createClass({
    render: function () {
        return <div>
            <Cell alive="true" />
        </div>;
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
