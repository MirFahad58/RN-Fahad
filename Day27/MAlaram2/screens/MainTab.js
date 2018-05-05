import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Main2 from './Main2';
import AclockMain from './AclockMain';
import VideoA from './Video';
import AboutUs from './AboutUs';
import SettingsA from './Settings';

export default TabNavigator(
  { 
    // SingleAlarm: { screen: Main },
    Alarm: { screen: Main2 },
    MAlarm:{screen:AclockMain },
    Video:{screen:VideoA},
    Settings: { screen: SettingsA },
    AboutUs:{screen:AboutUs}   
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        //  if (routeName === 'SingleAlarm') {
        //   iconName = `ios-alarm${focused ? '' : '-outline'}`;
        // }
        // else 
        if (routeName === 'Alarm') {
          iconName = `ios-alarm${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'MAlarm') {
          iconName = `ios-alarm${focused ? '' : '-outline'}`;
        } 
        else if (routeName === 'Video') {
          iconName = `ios-film${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'AboutUs') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarColor:'red',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
