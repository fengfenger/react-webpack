import './style/main.scss'
import './utils/flexible.js'

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        //JSX here!
        return (
        <div>
          hello worldddddd
        </div>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('app'));
