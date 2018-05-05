import React from "react";
import { View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import Splash from "./screen/splash";
import Dashboard from "./screen/Dashboard";
//import Main from "./screen/main";
import Login from "./screen/Tabnavigate/login";
import Signup from "./screen/Tabnavigate/singnup";


const StackApp1 = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    },
    Signup:{
      screen: Signup
    }
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
