import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default class Divider {
	static list = () => {
		return (
			<View style={styles.listDivider} />
		);
	};
}

const styles = StyleSheet.create({
	listDivider: {
		height: 1,
		backgroundColor: Colors.divider,
		marginLeft: 16,
		marginRight: 16
	}
});
