import React, {Component} from 'react';

class Specials extends Component {
	render(){
		return(

			<div className="container-fluid">
			   <div className="row">
				   <div className="col-sm-12 thumbnail text-center">
						<a href="#"><img src="../../img/burger.jpg" alt="Hamburger and Fries" className="img-responsive"/>
							<div className="caption">
			                	<h2>Daily Specials</h2>
			                </div>
		                </a>
		           </div>
			   </div>
			</div>
		);
	}
}

export default Specials;