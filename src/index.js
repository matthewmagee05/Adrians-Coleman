import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Orders from './components/Orders';
import Items from './components/Items';
import Customers from './components/Customers';
import Specials from './components/Specials';
import Login from './components/Login';
import firebase from 'firebase';

		firebase.initializeApp({

	    apiKey: "AIzaSyAEcEiYfap37IRr-kxjsCMJjQlm3Hs3vlM",
        authDomain: "adriansadmin.firebaseapp.com",
        databaseURL: "https://adriansadmin.firebaseio.com",
        storageBucket: "adriansadmin.appspot.com",
        messagingSenderId: "50443956799"
		}
  	);

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/items" component={Items}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/specials" component={Specials}/>
        <Route path="/login" component={Login}/>
    </Router>
   ), document.querySelector('#main'));
