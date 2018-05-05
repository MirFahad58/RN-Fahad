import React from "react";
import { View } from "react-native";
import { TabNavigator,StackNavigator } from "react-navigation";
import TabNav from "../App";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <TabNav/>
    );
  }
}
