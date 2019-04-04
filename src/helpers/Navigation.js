import { StackActions, NavigationActions, createAppContainer, createStackNavigator} from 'react-navigation';
import TabContainer from '../containers/TabContainer'
import LoginScreen from "../screens/LoginScreen";

export const Navigation = createAppContainer(
    createStackNavigator(
        {
          Login: LoginScreen,
          Tabs: TabContainer
        },
        {
          initialRouteName: 'Login'
        }
    )
);

export const Action = {
  Login: StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Tabs'
      })
    ]
  })
};
