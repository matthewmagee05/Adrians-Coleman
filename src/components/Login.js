import React, {Component} from 'react';
import firebase from 'firebase';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = { email: '', password: ''};
	}
	

	onButtonPress(e){
		e.preventDefault();
		const {email, password} = this.state;

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(
				);
	}

	handleEmailChange(e) {
	   this.setState({email: e.target.value});
	}
	handlePasswordChange(e) {
	   this.setState({password: e.target.value});
	}

	render(){
		return(
			<div className="container">
		      <form className="form-signin">
		        <img src="../../img/adrians_logo_mockup.png" alt="Adrians@Coleman" className="form-signin-heading loginImage"></img>
		        <label className="sr-only">Email address</label>
		        <input 
		        	type="email" 
		        	id="inputEmail" 
		        	className="form-control" 
		        	placeholder="Email address" 
		        	required
		        	value={this.state.email}
		        	onChange={this.handleEmailChange.bind(this)}/>
		        <label className="sr-only">Password</label>
		        <input 
		        	type="password" 
		        	id="inputPassword" 
		        	className="form-control" 
		        	placeholder="Password" 
		        	required
		        	value={this.state.password}
		        	onChange={this.handlePasswordChange.bind(this)}/>
		        <button className="btn btn-lg btn-primary btn-block" onClick={this.onButtonPress.bind(this)}>Sign in</button>
		      </form>
			</div>
		);
	}

	
}

export default Login;