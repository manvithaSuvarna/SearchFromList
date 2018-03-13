import React from 'react';
export default class Content extends React.Component{
	
	render(){
			const {listItems} = this.props;
					return (
					  
					  <div class="container">
					  <h2>List Items(R-Read Operation)</h2>
					  <table class="table table-striped">
					  	<thead>
					      <tr>
					        <th>Firstname</th>
					        <th>Lastname</th>
					        <th>Email</th>
					      </tr>
					     </thead>
					     
					    <tbody>
					    	
					    	{listItems.map((listItem) => {
					    		return(
						      <tr>
						        <td>{listItem.firstName}</td>
						        <td>{listItem.lastName}</td>
						        <td>{listItem.email}</td>
						      </tr>
						      );
						    })}
						    
					    </tbody>
					    
					  </table>
					  </div>
					  );
					

	}

}