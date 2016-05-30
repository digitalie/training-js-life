import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import {matrix} from './Config';

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
