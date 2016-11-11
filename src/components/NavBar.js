import React, {Component} from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';

class NavBar extends Component {

	render(){
		return(
			    <div className="nav-side-menu">
			        <img src="../../img/adrians_logo_mockup.png" alt="Adrians@Coleman" className="form-signin-heading menuImage"></img>
			        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
			      
			            <div className="menu-list">
			      
			                <ul id="menu-content" className="menu-content collapse out">
			                    <li>
			                      <Link to="/orders">
			                      	<i className="fa fa-shopping-cart fa-lg"></i> Orders
			                      </Link>
			                    </li>

			                    <li  data-toggle="collapse" data-target="#products" className="collapsed">
			                      <Link to="/items">
			                      	<i className="fa fa-list fa-lg"></i> Items 
			                      </Link>
			                    </li>
			                    <li data-toggle="collapse" data-target="#service" className="collapsed">
			                      <Link to="/customers">
			                      	<i className="fa fa-users fa-lg"></i> Customers 
			                      </Link>
			                    </li>  
			                    <li data-toggle="collapse" data-target="#new" className="collapsed">
			                      <Link to="/specials">
			                      	<i className="fa fa-tag fa-lg"></i> Specials
			                      </Link>
			                    </li>
			                     <li>
			                      <a onClick={() => firebase.auth().signOut()}>
			                      <i className="fa fa-users fa-lg"></i> Log Out
			                      </a>
			                    </li>
			                </ul>
			         </div>
			    </div>
		);
	}	
}

export default NavBar;