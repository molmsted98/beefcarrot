import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer, setNavigator } from './src/helpers/Navigation';
import rootReducer from './src/redux/Reducers';
import Colors from './src/constants/Colors';

const store = createStore(rootReducer);

export default class App extends Component {
	componentDidMount() {
		setNavigator(this.navigator);
	}

	render() {
		return (
			<Provider store={store}>
				<StatusBar backgroundColor={Colors.colorDark} barStyle="light-content" />
				<AppContainer
					ref={(nav) => {
						this.navigator = nav;
					}}
				/>
			</Provider>
		);
	}
}
