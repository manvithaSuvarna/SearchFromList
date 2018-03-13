import React from 'react';
import ListItem from './ListItem'
import Content from './Content'
export default class CreateForm extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			listItems : [{
				firstName : "John",
				lastName : "Doe",
				email : "johan.doe@gmail.com"

			},
			{
				firstName : "Misha",
				lastName : "Modi",
				email : "Misha.Modi@gmail.com"

			},
			{
				firstName : "Alisha",
				lastName : "bhatt",
				email : "Alisha.bhatt@gmail.com"

			},
			{
				firstName : "Tom",
				lastName : "hatri",
				email : "Tom.hatri@gmail.com"

			},
			{
				firstName : "Tret",
				lastName : "Mark",
				email : "Trert.Mark@gmail.com"

			}
			
			],
			shown : true,
			index:""
			}
		
		this.handleSubmit=this.handleSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
		this.onDelete=this.onDelete.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onEditItem=this.onEditItem.bind(this);
	}

	onDelete(index){
		var listItems = this.state.listItems;
		listItems.splice(index,1);
		this.setState({
			listItems:listItems
		});
		this.forceUpdate();

	}
	onEdit(index){
		console.log("onEdit");
		var listItems = this.state.listItems;
		this.state.firstName = this.state.listItems[index].firstName;
		this.state.lastName = this.state.listItems[index].lastName;
		this.state.email = this.state.listItems[index].email;
		this.state.index = index;
		this.state.shown = !this.state.shown;
		
			this.setState(
			this.state
			
		);
		this.forceUpdate();
		
	}
	onEditItem(){
		console.log("triggerd");
		var index= this.state.index;
		var listItems = this.state.listItems;
		listItems[index].firstName = this.state.firstName;
		listItems[index].lastName = this.state.lastName;
		listItems[index].email = this.state.email;
		this.setState({
		listItems : listItems,
		shown: !this.state.shown
		});
		this.refreshForm();

	}
	

	handleSubmit(event){
		event.preventDefault();
	
     console.log(JSON.stringify(this.state, null, 4));
     var newItem =
     		{
	     		firstName : this.state.firstName,
    	 		lastName  : this.state.lastName,
     			email  : this.state.email
     		}

     		this.state.listItems = this.state.listItems.concat(newItem);
     		this.setState(this.state);
          	this.refreshForm();

	}
	onChange(event){
		var state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	refreshForm(){
		this.state.email = "";
		this.state.firstName = "";
		this.state.lastName = "";
	}
	render(){
			var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
		return (
			<div class="container">
  				<h2>Enter Details</h2>
  				<form class="form-horizontal" onSubmit={this.handleSubmit}>
				    <div class="form-group">
				      <label class="control-label col-sm-2">Email:</label>
				      <div class="col-sm-4">
				        <input type="email"  value={this.state.email}  onChange={this.onChange} class="form-control" id="email" placeholder="Enter email" name="email"/>
				      </div>
				    </div>
				    <div class="form-group">
				      <label class="control-label col-sm-2">First Name:</label>
				      <div class="col-sm-4">          
				        <input type="text" onChange={this.onChange} value={this.state.firstName}  class="form-control" id="pwd" placeholder="Enter First Name" name="firstName"/>
				      </div>
				    </div>
				    <div class="form-group">
				      <label class="control-label col-sm-2">Last Name:</label>
				      <div class="col-sm-4">          
				        <input type="text" onChange={this.onChange} value={this.state.lastName}  class="form-control" id="pwd" placeholder="Enter Last Name" name="lastName"/>
				      </div>
				    </div>
				    
				    <div class="form-group">        
				      <div class="col-sm-offset-2 col-sm-10">
				        <button type="submit" class="btn btn-default" ref="Create"  style={ shown }>Submit</button>
				      </div>
				      <div class="col-sm-offset-2 col-sm-10">
				        <button type="button" onClick={this.onEditItem} class="btn btn-default" style={ hidden }>Edit</button>
				      </div>
				    </div>
  				</form>
  				<Content listItems={this.state.listItems} onDelete={this.onDelete} onEdit={this.onEdit}/>
			</div>
			


		)	

	}

}