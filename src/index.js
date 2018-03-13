import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './component/Title';
import CreateForm from './component/CreateForm';

class App extends React.Component{
	render () {
		
		return( 
			 
			<div>
				<Title title="Me" />
				<CreateForm/>
				
				
			</div>
		)

	}

}
ReactDOM.render(<App/>, document.getElementById('root'));

