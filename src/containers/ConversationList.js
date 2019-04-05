import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import ConversationItem from '../items/ConversationItem';
import Divider from '../components/Divider';

export default class ConversationList extends PureComponent {
	keyExtractor = (item) => item.id;

	renderItem = ({ item }) => (
		<ConversationItem
			id={item.id}
			onPress={() => item.onPress()}
			title={item.title}
		/>
	);

	render() {
		return (
			<FlatList
				data={this.props.data}
				extraData={this.state}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderItem}
				ItemSeparatorComponent={Divider.list}
			/>
		);
	}
}
