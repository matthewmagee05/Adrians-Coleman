import React, { Component } from 'react';
import * as firebase from 'firebase';
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
					<Orders loggedIn={this.state.loggedIn}/>
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