import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './views/Home';

ReactDOM.render ((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} /> 
        </Route>
    </Router>
), document.getElementById('app'));