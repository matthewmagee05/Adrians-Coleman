import React, {Component} from 'react';

class SnacksDrinks extends Component {
	render(){
		return(
			<div className="container-fluid">
			   <div className="row">
				   <div className="col-xs-6">
						<a href="#"><img src="../../img/sandwich.jpg" alt="Drinks" className="img-responsive"/>
							<div className="caption">
			                	<h2 className="imageCaptions">Drinks</h2>
			                </div>
		                </a>
		           </div>
		           <div className="col-xs-6">
		           		<a href="#"><img src="../../img/sandwich.jpg" alt="Snacks" className="img-responsive"/>
		           			<div className="caption">
		           	        	<h2 className="imageCaptions">Snacks</h2>
		           	        </div>
		                </a>
		            </div>
		        </div>
		    </div>
		);
	}
}

export default SnacksDrinks;