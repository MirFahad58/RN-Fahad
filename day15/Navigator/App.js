import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Dashboard from './Screens/Dashboard';
import Splash from './Screens/Splash';

const StackApp = StackNavigator({
  Splash: {
    screen: Splash
  },
  Dashboard: {
    screen: Dashboard
  }
})

export default class extends React.Component {
  render() {
    return (
      <View>
        <StackApp />
      </View>
    )
  }
}