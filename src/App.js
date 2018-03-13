import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './component/Title';
import Content from './component/Content';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component{
	render () {
		return( 
			<div className ="noti">
				<div className="noti1">
				<h1>Hello world</h1>
					<Title />
					<Content />
				</div>
			</div>
		)

	}
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
}
