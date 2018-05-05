import React from 'react';
import {AsyncStorage} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import Splash from "./screen/splash";
import Login from "./screen/login";
import Signup from "./screen/singnup";
import Dashboard from "./screen/Dashboard";
import Index from "./screen/Tabnavigate/index";
import Profile from "./screen/Tabnavigate/profile";
import About from "./screen/Tabnavigate/About";


const TabNav = TabNavigator({
  Index:{
    screen: Index
  },
  Profile: {
    screen: Profile
  },
  About:{
    screen: About
  },
},{
tabBarOptions: {
  paddingTop: '20dp' ,
  activeTintColor: '#fff',
  labelStyle: {
    fontSize: 20,
  },
  
  style: {
    backgroundColor: 'gray',
  },
}
}
);
const StackApp = StackNavigator({
  Splash:{
    screen: Splash
  },
  Login: {
    screen: Login,
  },
  Signup:{
    screen:Signup
  },
  Dashboard:{
    screen: Dashboard,
  },
},
{
  headerMode: 'none',
}
);



export default class extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StackApp />
    )
  }
}



