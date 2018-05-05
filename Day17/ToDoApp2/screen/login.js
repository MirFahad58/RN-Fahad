import React from "react";
import {
StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage  
} from "react-native";

import { StackNavigator } from "react-navigation";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username1: "", password1: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }
  //ForLogin
  handleLogin = async () => {
    try {
      let userdata = await AsyncStorage.getItem("loginData");
      let parsing = JSON.parse(userdata);
      if (parsing.username==this.state.username1 && parsing.password==this.state.password1) {
        setTimeout(() => {
          this.props.navigation.navigate("Dashboard");
        }, 300);
        //Making Check=True
          let obj = {
                  checkf: "true"
          };
          AsyncStorage.setItem("check1", JSON.stringify(obj));
      }
      else{
        alert("username or password not found");
      }
    } catch (error) {
      alert("username and password not found please SignUp");
    }
  };
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.Img}>
          <Image
            style={{ width: 40, height: 70 }}
            source={require("ToDoApp2/images/logo.png")}
          />
          <Text style={styles.logoText}>SignIn Form.</Text>
        </View>
        <View style={styles.Inp}>
          <TextInput
            style={styles.inputBox}
            onChangeText={e => {
              this.setState({ username1: e });
            }}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Username"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onSubmitEditing={()=> this.password.focus()}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={e => {
              this.setState({ password1: e });
            }}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            ref={(input) => this.password = input}
          />
          <View>
            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
              <Text style={styles.buttonText}>SinIn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup", {})}
          >
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
