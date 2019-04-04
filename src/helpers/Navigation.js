import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabContainer from '../containers/TabContainer'

const Navigation = createAppContainer(
    createStackNavigator(
        {
          Tabs: TabContainer,
        },
        {
          initialRouteName: 'Tabs'
        }
    )
);

export default Navigation;