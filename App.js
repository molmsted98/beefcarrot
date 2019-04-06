import React, { Component } from 'react';
import { AppContainer, setNavigator } from './src/helpers/Navigation';

export default class App extends Component {
	componentDidMount() {
		setNavigator(this.navigator);
	}

	render() {
		return (
			<AppContainer
				ref={(nav) => {
					this.navigator = nav;
				}}
			/>
		);
	}
}
