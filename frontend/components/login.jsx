import React from 'react';
import {createBrowserHistory,createHashHistory,createMemoryHistory} from 'history';
//CSS
import css from '../stylesheets/main.css';

export default class Login extends React.Component{
constructor(props){
	super(props);
	this.state = {email_address: '', password:''};
	this.emailAddressChange = this.emailAddressChange.bind(this)
	this.passwordChange = this.passwordChange.bind(this)
}
emailAddressChange(e){
	this.setState({email_address:e.target.value})
}
passwordChange(e){
	this.setState({password:e.target.value})
}
loginUser(e){
//This will re-direct us to the recipe page once user has clicked login
this.props.history.push({pathname: '/recipes'});
}
	render(){
		return(
		<div className="login">
			<center>
			<div className="logo">
				<img src="../public/svg/hellofresh-logo.png" alt="hellofresh" id="helloFreshLogo"/>
			</div>
				<div id="form-background">
						<form onSubmit={this.loginUser.bind(this)}>
							<input type="email" placeholder="Email Address" className="email" onChange={this.emailAddressChange} value={this.state.email_address} required>
							</input><br/>
							<input type="password" placeholder="Password" className="password" onChange={this.passwordChange} value={this.state.password} minLength="8" maxLength="16" required>
							</input><br/>
							<input type="submit" value="Login" className="loginBtn"/>
						</form>
				</div>
				<ul id="links">
					<li><a href="#" id="linkOne">Forgot Password?</a></li>
					<li><a href="#" id="linkTwo">Don't have an account? Get started</a></li>
				</ul>
			</center>
		</div>
		)
	}
}
