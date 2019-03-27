import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import EventScreen from './EventScreen';
import SettingsScreen from './SettingsScreen';

const TabNavigator = createBottomTabNavigator({
  Home: EventScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
