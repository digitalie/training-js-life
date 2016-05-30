import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';

const matrix = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
];

let App = React.createClass({
    render: function () {
        return <div>
            <Grid map={matrix} />
        </div>;
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
