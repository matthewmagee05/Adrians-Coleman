import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Orders from './components/Orders';
import Items from './components/Items';
import Customers from './components/Customers';
import Specials from './components/Specials';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/items" component={Items}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/specials" component={Specials}/>
    </Router>
   ), document.querySelector('#main'));
