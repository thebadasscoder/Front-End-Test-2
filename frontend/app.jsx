import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

//Import Components Here 
import Login from './components/login.jsx';
import Recipes from './components/recipes.jsx';



class App extends React.Component {
	render(){
		return(
		<div>
		{this.props.children}
		</div>
		);
	}
}

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/recipes" component={Recipes}/>
		</Switch>
	</BrowserRouter>
), document.getElementById('root'))
