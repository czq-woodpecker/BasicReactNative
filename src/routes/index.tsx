import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Home} from '../screens/Home';
import {UserList} from '../screens/UserList';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    UserList: {
      screen: UserList,
      navigationOptions: {
        title: 'UserList',
      },
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    cardOverlayEnabled: false,
  },
);

export const AppContainer = createAppContainer(AppNavigator);
