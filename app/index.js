import './style/main.scss'
import './utils/flexible.js'

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Demo from './components/demo.js'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Demo} />
  </Router>
), document.getElementById('app'));
