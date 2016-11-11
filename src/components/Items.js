import React, {Component} from 'react';
import NavBar from './NavBar';

class Items extends Component {
	render(){
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
	}
}

export default Items;