import React from 'react';
import { View, Text,Image, StyleSheet, Dimensions} from 'react-native';
import {Video} from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

import { StackNavigator} from 'react-navigation';
export default class SettingsA extends React.Component {
    
    render() {
      const { width } = Dimensions.get('window');
		
      return (
        <View style={styles.container}>
         
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center',
      },
     
})
// container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   }