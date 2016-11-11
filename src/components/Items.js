import React, {Component} from 'react';
import NavBar from './NavBar';
import App from '../App';
import firebase from 'firebase';

class Items extends Component {

		 constructor(props) {
	    	super(props);
	    	this.state ={ loggedIn: null };
	  }

	componentWillMount(){
		
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	render(){
		switch(this.state.loggedIn){
			case true:
				return(
					<div>
						<div className="row">
							<div className="col-sm-3 col-md-2">
								<NavBar/>
							</div>
							<div className="col-sm-9 col-md-10">
								<h1>Items Go Here</h1>
							</div>
						</div>
					</div>
				);
			case false:
				return (
					<App/>
				);
			default:
				return(
				 	<div>
				 		Loading...
				 	</div>
				 );
			}
	}
}

export default Items;