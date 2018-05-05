import React, { Component } from 'react';
import {TouchableOpacity,Image,  View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Audio } from "expo";
// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  _handlePlaySoundAsync = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync(require('./assets/testmusic.mp3'));
    await sound.playAsync();
  };
  render() {
    return (
      <View style={styles.container}>
        <Card title="Hello World!">
            <View style={styles.container1}>
        <TouchableOpacity
        onPress={this._handlePlaySoundAsync.bind(this)}
        >       
        <Image style={styles.logo} source={require('./assets/test.jpg')}/>
        </TouchableOpacity>
      </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 250,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});