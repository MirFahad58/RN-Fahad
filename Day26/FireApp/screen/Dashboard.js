import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,AsyncStorage,TextInput,ListView,TouchableHighlight } from "react-native";
import { StackNavigator } from "react-navigation";
import * as firebase from "firebase";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    try {

      firebase.auth().signOut()
      .then((user)=>{
        this.props.navigation.navigate('Login')
      // Making Check=f alse
        let obj = {
                checkf: "false"
        };
        AsyncStorage.setItem("check1", JSON.stringify(obj));
      });

      // Navigate to login view

  } catch (error) {
      alert(error.toString())
  }
      
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.Main}>
        <Text style={styles.logoText}>ToDo App Dashboard.</Text>
        </View>
        <View style={styles.Input}> 
        <TextInput
            style={styles.inputBox}
            onChangeText={e => {
              this.setState({ email: e });
            }}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="ToDo Input"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
          />
        </View>
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
    alignItems: 'center',
    
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)",
  },
  button: {
    width: 100,
    backgroundColor: "#1c313a",
    borderRadius: 35,
    marginVertical: 15,
    paddingVertical: 16
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  Main:{
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
});
