import React from "react";
import { View } from "react-native";
import { TabNavigator,StackNavigator } from "react-navigation";
import Login from "./Tabnavigate/login";
import Signup from "./Tabnavigate/singnup";

const TabNav = TabNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
  },
  {
    tabBarOptions: {
      paddingTop: "20dp",
      activeTintColor: "#fff",
      labelStyle: {
        fontSize: 20
      },

      style: {
        backgroundColor: "gray"
      }
    }
  }
);
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <TabNav/>
    );
  }
}
