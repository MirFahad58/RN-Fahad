import React from 'react';
import {AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from "./screen/splash";
import Login from "./screen/login";
import Signup from "./screen/singnup";
import Dashboard from "./screen/Dashboard";


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
  }
},
{
  headerMode: 'none',
}
);



export default class extends React.Component {

  constructor(props) {
    super(props);
    //this.initiateLocalStorage = this.initiateLocalStorage.bind(this);
  }

  // async initiateLocalStorage() {
  //   await AsyncStorage.setItem('auth','');
  // }

  // componentDidMount() {
  //   this.initiateLocalStorage();
  // }

  render() {
    return (
      <StackApp />
    )
  }
}



