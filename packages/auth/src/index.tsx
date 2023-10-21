import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  SignInScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    SignInScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  },
  {
    initialRouteName: 'SignInScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);