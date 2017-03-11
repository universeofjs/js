import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
require('../sass/styles.global.scss');
import Header from './components/Header';
import Like from './components/Like';
import {store} from './store/configureStore';

export default class App extends React.Component {

	render () {
		return (
		  <div className="homePage">
				<Header />
				<h1>Hello World from Ankit Jain</h1>
				<Like/>
		  </div>
		);
	}
}

render(
	<Provider store={store}>
		<App/> 
	</Provider>, 
	document.getElementById('app')
);