import React, {Component} from 'react';

class CreateSandwich extends Component {
	render(){
		return(

			<div className="container-fluid">
			   <div className="row">
				   <div className="col-xs-6">
						<a href="#"><img src="../../img/sandwich.jpg" alt="Sandwich" className="img-responsive"/>
							<div className="caption">
			                	<h2 className="imageCaptions">Create A Sandwich</h2>
			                </div>
		                </a>
		           </div>
		           <div className="col-xs-6">
			           <div className="row">
			           		<div className="col-xs-12">
			           			<a href="#"><img src="../../img/breakfast.jpg" alt="Breakfast" className="img-responsive"/>
			           				<div className="caption">
			           					<h2 className="imageCaptions">Breakfast</h2>
			           				</div>
			           			</a>
			           		</div>
			           		<div className="col-xs-12 sides">
			           			<a href="#"><img src="../../img/salad.jpg" alt="Salad" className="img-responsive"/>
			           				<div className="caption">
			           					<h2 className="imageCaptions">Sides And Extras</h2>
			           				</div>
			           			</a>
			           		</div>
			           </div>
		           </div>
			   </div>
			</div>
		);
	}
}

export default CreateSandwich;