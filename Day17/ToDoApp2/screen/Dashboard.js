import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,AsyncStorage } from "react-native";

import { StackNavigator } from "react-navigation";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
      this.props.navigation.navigate('Login')
      // Making Check=false
        let obj = {
                checkf: "false"
        };
        AsyncStorage.setItem("check1", JSON.stringify(obj));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>Welcome to ToDo App Dashboard.</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)"
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
