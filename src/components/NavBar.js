import React, {Component} from 'react';

class NavBar extends Component {

	render(){
		return(
			  <nav className="navbar navbar-inverse navbar-static-top">
			    <div className="container">
			      <div className="navbar-header">
			        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar3">
			          <span className="sr-only">Toggle navigation</span>
			          <span className="icon-bar"></span>
			          <span className="icon-bar"></span>
			          <span className="icon-bar"></span>
			        </button>
			        <a className="navbar-brand" ><img src="../../img/adrians_logo_mockup.png" alt="Adrians@Coleman"></img>
			        </a>
			      </div>
			      <div id="navbar3" className="navbar-collapse collapse">
			        <ul className="nav navbar-nav navbar-right">
			          <li><a href="#">Home</a></li>
			          <li><a href="#">Menu</a></li>
			          <li><a href="#">Specials</a></li>
			          <li><a href="#">Sign In</a></li>
			          <li><a href="#"><img className="cart" src="../../img/shopping_cart_green.png"></img>1</a></li>
			        </ul>
			      </div>
			    </div>
			  </nav>
		);
	}	
}

export default NavBar;