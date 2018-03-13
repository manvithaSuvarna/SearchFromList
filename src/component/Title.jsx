import React from 'react';
export default class Title extends React.Component{
	
	render(){
		return (
			
			<nav class="navbar navbar-default">
			  <div class="container">
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>                        
			      </button>
			      <a class="navbar-brand" href="#">{this.props.title}</a>
			    </div>
			    <div class="collapse navbar-collapse" id="myNavbar">
			      <ul class="nav navbar-nav navbar-right">
			        <li><a href="#">WHO</a></li>
			        <li><a href="#">WHAT</a></li>
			        <li><a href="#">WHERE</a></li>
			      </ul>
			    </div>
			  </div>
			</nav>

		)
		
	}

}