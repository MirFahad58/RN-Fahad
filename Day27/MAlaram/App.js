import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from "./screens/Splash";
import MainTab from './screens/MainTab';
import {StackNavigator} from 'react-navigation';

const StackApp1 = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    MainTab: {
      screen: MainTab
    },
  },
  {
    headerMode: "none"
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <StackApp1/>
  );
  }
}
