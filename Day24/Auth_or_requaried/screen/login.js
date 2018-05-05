import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,Button
} from "react-native";
import { Form, TextValidator } from 'react-native-validator-form';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ForLogin
  handleChange(event) {
    const email = event.nativeEvent.text;
    this.setState({ email });
}

submit() {
    // your submit logic 
}

handleSubmit() {
    this.refs.form.submit();
}
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.Img}>
          <Image
            style={{ width: 40, height: 70 }}
            source={require("Auth_or_requaried/images/logo.png")}
          />
          <Text style={styles.logoText}>SignIn Form.</Text>
        </View>
        <View style={styles.Inp}>

        <Form
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    name="email"
                    validators='required'
                    errorMessages = 'This field is required'
                    placeholder= "Your email"
                    type="text"
                    keyboardType="email-address"
                    onChange={this.handleChange}
                />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </Form>

         {/* <TextInput
            style={styles.inputBox}
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
          />  */}

          <View>
            <TouchableOpacity style={styles.button} 
            // onPress={this.handleLogin}
            >
              <Text style={styles.buttonText}>SinIn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("Signup", {})}
          >
            <Text style={styles.signupButton}> Signup</Text>
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
