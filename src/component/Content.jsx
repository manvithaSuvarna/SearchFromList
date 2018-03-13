import React,{Component} from 'react';
import ListItem from './ListItem';
import CreateForm from './CreateForm'
export default class Content extends Component{
	constructor(props){
		super(props);	
		this.state ={
			search : ""
		};
		this.updateSearch=this.updateSearch.bind(this);
	}
	
	updateSearch(event){
		this.setState({
			search : event.target.value
		});

	}
	
	render(){
			let listItems = this.props.listItems.filter(
				(listItem) =>{
					return listItem.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
				}

			);
			
					return (
					  <div>
					  
					  <h2>List Items(R-Read Operation)</h2>
					  <div class="input-group">
						<input type="text"  onChange={this.updateSearch} placeholder="Search for..."/>
						</div>
					  <table class="table table-striped">
					  	<thead>
					      <tr>
					        <th>Firstname</th>
					        <th>Lastname</th>
					        <th>Email</th>
					        <th></th>
					        <th></th>
					      </tr>
					     </thead>
					     
					    <tbody>
					    	
					    	{listItems.map((listItem,index) =>
					    		<ListItem onDelete={this.props.onDelete} listItem={listItem} key={index} index={index} listItems={this.props.listItems} onEdit={this.props.onEdit} />
					    	)}
					    		
						    
					    </tbody>
					    
					  </table>
					  </div>
					  );
					

	}

}