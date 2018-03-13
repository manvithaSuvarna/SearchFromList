import React from 'react';
import Content from './Content'
export default class ListItem extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		    return(
			      <tr key={this.props.index}>
			        <td>{this.props.listItem.firstName}</td>
			        <td>{this.props.listItem.lastName}</td>
			        <td>{this.props.listItem.email}</td>
			        <td><button type="button" class="btn btn-primary" onClick={(e) => {
				        this.props.onDelete(this.props.index);
			        }}>Delete</button></td>
			        <td><button type="button" class="btn btn-primary"onClick={(e) => {
				        this.props.onEdit(this.props.index);
			        }}>Edit</button></td>
			      </tr>

	      );
				
				    
					

	}

}