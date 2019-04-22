import { StyleSheet } from 'react-native';
import Colors from './Colors';

const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.screen
	},
	header: {
		color: Colors.titleColor,
		fontSize: 20
	},
	subHeader: {
		color: Colors.titleColor,
		fontSize: 14,
		fontWeight: "500"
	},
	title: {
		color: Colors.titleColor,
		fontSize: 16
	},
	body: {
		color: Colors.body,
		fontSize: 14
	}
});

export default GlobalStyles;
