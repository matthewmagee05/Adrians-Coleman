import React, {Component} from 'react';
import NavBar from './NavBar';
import App from '../App';

class Orders extends Component {

	render(){
		switch(this.props.loggedIn){
			case true:
				return(
					<div>
						<div className="row">
							<div className="col-sm-3 col-md-2">
								<NavBar/>
							</div>
							<div className="col-sm-9 col-md-10">
								<h1>Orders Go Here</h1>
							</div>
						</div>
					</div>
				);
			case undefined:
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

export default Orders;