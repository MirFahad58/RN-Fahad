import React from "react";
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView, } from "react-native";
import * as firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyAOXbRHbu9Y-ds6bDKlB0wOlQhU2Q7yIWw",
  authDomain: "fir-app-43d37.firebaseapp.com",
  databaseURL: "https://fir-app-43d37.firebaseio.com",
  storageBucket: "fir-app-43d37.appspot.com",
};

//ForLogin
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(){  
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      });
  };

  render() {
    firebase
      .auth()
      .signInAnonymouslyAndRetrieveData()
      .then(credential => {
        if (credential) {
          console.log("default app user ->", credential.user.toJSON());
        }
      });
    return( 
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.Img}>
        <Image
          style={{ width: 40, height: 70 }}
          source={require("FireBaseApp/images/logo.png")}
        />
        <Text style={styles.logoText}>SignUp Form.</Text>
      </View>
      <View style={styles.Inp}>
        <TextInput
          style={styles.inputBox}
          onChangeText={e => {
            this.setState({ email: e });
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
            this.setState({ password: e });
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
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity
          //onPress={() => this.props.navigation.navigate("Signup", {})}
        >
          <Text style={styles.signupButton}> SignIn</Text>
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