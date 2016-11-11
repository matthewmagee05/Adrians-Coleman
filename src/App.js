import React, { Component } from 'react';
import * as firebase from 'firebase';
import Navbar from './components/NavBar';
import Specials from './components/Specials';
import Login from './components/Login';
import Orders from './components/Orders';

//main file for app
export default class App extends Component {

	 constructor(props) {
    	super(props);
    	this.state ={ loggedIn: null };
  }

	
  	//as soon as this component is loaded, firebase
  	//connects to the database.
	componentWillMount(){
		firebase.initializeApp({

	    apiKey: "AIzaSyAEcEiYfap37IRr-kxjsCMJjQlm3Hs3vlM",
        authDomain: "adriansadmin.firebaseapp.com",
        databaseURL: "https://adriansadmin.firebaseio.com",
        storageBucket: "adriansadmin.appspot.com",
        messagingSenderId: "50443956799"
		}
  	);
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});

	
	}

	renderContent(){
		switch(this.state.loggedIn){
			case true:
				return (
					<Orders/>
				);
			case false:
				return (
					<Login/>
				);

			default:
				return(
				 	<div>
				 		Loading...
				 	</div>
				 );
		}
		
	}

	render() {
		return (
			<div>{this.renderContent()}</div>
		)
	}
}