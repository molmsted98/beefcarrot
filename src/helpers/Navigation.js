import { StackActions, NavigationActions, createAppContainer, createStackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import TabContainer from '../containers/TabContainer'
import LoginScreen from "../screens/LoginScreen";
import ConversationScreen from "../screens/ConversationScreen";
import Colors from '../constants/Colors';

const config = {};

export const Screens = {
	Login: "Login",
	Tabs: "Tabs",
	Conversation: "Conversation"
};

export const AppContainer = createAppContainer(
	createStackNavigator(
		{
			Login: {
				screen: LoginScreen,
			},
			Tabs: {
				screen: TabContainer,
				navigationOptions: {
					title: "Make Plans",
					headerStyle: {
						backgroundColor: Colors.colorPrimary
					},
					headerTitleStyle: {
						color: 'white',
					},
				}
			},
			Conversation: ConversationScreen
		},
		{
			initialRouteName: 'Login',
			headerMode: 'screen',
			transitionConfig: () => ({
				screenInterpolator: (props) => {
					const { scene } = props;
					switch (scene.route.routeName) {
						case Screens.Conversation:
							return CardStackStyleInterpolator.forHorizontal(props);
						default:
							return CardStackStyleInterpolator.forNoAnimation(props);
					}
				}
			})
		}
	)
);

export function setNavigator(nav) {
	if (nav) {
		config.navigator = nav;
	}
}

export function navigate(routeName, params) {
	if (config.navigator && routeName) {
		const action = NavigationActions.navigate({ routeName, params });
		config.navigator.dispatch(action);
	}
}

export function reset(index, routeName, actions, params) {
	if (config.navigator && routeName) {
		const action = StackActions.reset({
			index,
			actions: [
				NavigationActions.navigate({ routeName, params })
			]
		});

		if (actions) {
			action.actions.push(actions)
		}

		config.navigator.dispatch(action);
	}
}

export function goBack() {
	if (config.navigator) {
		const action = NavigationActions.back({});
		config.navigator.dispatch(action);
	}
}
