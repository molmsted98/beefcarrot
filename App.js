import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer, setNavigator } from './src/helpers/Navigation';
import rootReducer from './src/redux/Reducers';

const store = createStore(rootReducer);

export default class App extends Component {
	componentDidMount() {
		setNavigator(this.navigator);
	}

	render() {
		return (
			<Provider store={store}>
				<AppContainer
					ref={(nav) => {
						this.navigator = nav;
					}}
				/>
			</Provider>
		);
	}
}
