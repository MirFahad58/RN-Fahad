import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,AsyncStorage
} from "react-native";

import * as firebase from "firebase";
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBky9154XqtuC0rHgJuWXhO4PvTWOnnIBo",
    authDomain: "fireapp-38933.firebaseapp.com",
    databaseURL: "https://fireapp-38933.firebaseio.com",
    storageBucket: "fireapp-38933.appspot.com",
  });
}


import { StackNavigator } from "react-navigation";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.state = { password: "" };
    this.SignUp = this.SignUp.bind(this);
  }
  //For Sign Up
  //  Check weather user is already present
  async SignUp () {
    const { email, password } = this.state;

      try {
       await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          alert("account Created")
  
          this.props.navigation.navigate("Login")
        });
  
          
  
      } catch (error) {
          alert(error.toString())
      }
  };
 

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.Img}>
          <Image
            style={{ width: 40, height: 70 }}
            source={require("FireApp/images/logo.png")}
          />
          <Text style={styles.logoText}>SignUp Form</Text>
        </View>
        <View style={styles.Inp}>
          <TextInput
            style={styles.inputBox}
            keyboardType="email-address"
            require
            onChangeText={user => this.setState({ email: user })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="email"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onSubmitEditing={()=> this.password.focus()}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={pass => this.setState({ password: pass })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            ref={(input) => this.password = input}
          />
          <TouchableOpacity style={styles.button} onPress={this.SignUp}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signinTextCont}>
          <Text style={styles.signinText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login", {})}
          >
            <Text style={styles.signinButton}> SignIn</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  Img: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)"
  },
  Inp: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
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
  },
  signinTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signinText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signinButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
