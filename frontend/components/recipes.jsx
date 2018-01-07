import React from 'react';
import axios from 'axios';
import {createBrowserHistory,createHashHistory,createMemoryHistory} from 'history';

//CSS
import css from '../stylesheets/recipe.css';


export default class Recipes extends React.Component{
constructor(props){
	super(props);
	this.state = {recipes:[], favorites: 0}
}
//Whenever the component renders it will send us the data of all the recipes and should update the state 
//If it successfully gets all the data we will set the new state to the object of data. 
//If not, we will console log this error message below
componentDidMount(){
	axios.get('/api/recipes')
		.then((res)=>{
		res ? this.setState({recipes:res.data}) : console.log('Error with object');
	})
}
//Once a user clicks on the heart icon once it will add 1 to the original number within the state

// favorRecipes(num){
// 	num = this.state.favorites;
// 	num += 1;
// this.setState({favorites: num})
// }
//If the user clicks it again it will unfavor the recipe and take away one from the original number within the state 

// unFavorRecipes(num){
// 	num = this.state.favorites;
// 	num -= 1;
// 	this.setState({favorite: num})
// }
	render(){
		//To display all of the recipes we will map through the entire array of data keeping track of both the index and value 
		//If we wanted to use the information in other parts of our app we would use the Links tag from react-router to access this information through props 

		let RecipesDisplay = this.state.recipes.map((val,indx)=>{
			return <div className="col-xs-2"><div className="box">
			<div className="wrapper">
			<input type="checkbox" id="st1" value="1" />
			<label for="st1"></label>
			<input type="checkbox" id="st2" value="2" />
			<label for="st2"></label>
			<input type="checkbox" id="st3" value="3" />
			<label for="st3"></label><input type="checkbox" id="st4" value="4" />
			<label for="st4"></label><input type="checkbox" id="st5" value="5" />
			<label for="st5"></label>
		 </div>
			<h3 key={indx}>{val.name}</h3>
			<p key={indx}>{val.headline}</p>
			<img key={indx} src={val.image} className="pics" width="30" height="30"/>
		</div>
		<hr width="80%"/>
			<div className="details">
			<p className="details" key={indx}>{val.description}</p>
		</div>
		<div className="time">
			<p className="time" key={indx}>Cook Time: {val.time}</p>
		</div>
		<div className="calories">
			<p className="calories" key={indx}>Calories: {val.calories}</p>
		</div>
		<div className="carbos">
			<p className="carbos" key={indx}>Carbos: {val.carbos}</p>
		</div>
		<div className="fats">
			<p className="fats" key={indx}>Fats: {val.fats}</p>
		</div>
		<div className="proteins">
			<p className="proteins" key={indx}>Proteins: {val.proteins}</p>
		</div>
		<div className="country">
			<p className="country">Country:{val.country}</p>
		</div>
		<div className="favs">
			<img src="../public/svg/like.png"key={indx} className="favs"/>{val.favorites}
		</div>

		</div>
		})
		return(
			<div className="recipes">
				<div className="xsLogo">
					<img src="../public/svg/hellofresh-xs-logo.png" className="xslogo" alt="smallLogo"/>
				</div>	
				<div className="row around-xs">
				 	{RecipesDisplay}
				</div>
				<div className="backLink">
					<a href="http://localhost:2020/"className="back">Back To Home</a>
				</div> 

			</div>
		)
	}
}