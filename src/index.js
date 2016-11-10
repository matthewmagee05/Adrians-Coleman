import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Specials from './components/Specials';
import CreateSandwich from './components/CreateSandwich';
import Footer from './components/Footer';
import SnacksDrinks from './components/SnacksDrinks';

class App extends Component {

	render(){
		return(
			<div>
				<NavBar></NavBar>
				<Specials></Specials>
				<CreateSandwich></CreateSandwich>
				<SnacksDrinks></SnacksDrinks>
				<Footer></Footer>
			</div>
		);
	}

		
}

ReactDOM.render(<App />, document.querySelector('#main'));