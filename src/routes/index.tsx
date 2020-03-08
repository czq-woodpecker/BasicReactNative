import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Home} from '../screens/Home';
import {UserList} from '../screens/UserList';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    UserList: {
      screen: UserList,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export const AppContainer = createAppContainer(AppNavigator);
