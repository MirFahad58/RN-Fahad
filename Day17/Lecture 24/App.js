import React from 'react';
import { StackNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import Splash from './Screens/Splash';
import Dashboard from './Screens/Dashboard';
import Login from './Screens/Login';

const StackApp = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
})

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.initiateLocalStorage = this.initiateLocalStorage.bind(this);
  }

  async initiateLocalStorage() {
    await AsyncStorage.setItem('auth','');
  }

  componentDidMount() {
    this.initiateLocalStorage();
  }

  render() {
    return (
      <StackApp />
    )
  }
}