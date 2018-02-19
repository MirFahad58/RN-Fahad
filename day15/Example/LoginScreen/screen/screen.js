import React from "react";
import {
    StyleSheet
    , Text
    , View
    , Image
    , KeyboardAvoidingView
    , TextInput
    , TouchableOpacity
    , AsyncStorage
} from "react-native";

export default class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text1: "" };
        this.state = { text2: "" };
        this.SaveData = this.SaveData.bind(this);
        this.displayData = this.displayData.bind(this);
    }
    displayData = async() => {
        try {
            let userdata = await AsyncStorage.getItem("userdata");
            let parsing = JSON.parse(userdata);
            alert(
                "username= " + parsing.username + "  and password= " + parsing.password
            );
        } catch (error) {}
    };
    SaveData() {
        let obj = {
                username: this.state.text1
            ,   password: this.state.text2
        };
        AsyncStorage.setItem("userdata", JSON.stringify(obj));
        alert("Data Saved");
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={Mystyles.logov}>
          <Image
            style={Mystyles.logo}
            source={require("LoginScreen/img/icona.png")}
          />
          <Text style={Mystyles.Header}>CONNECTION</Text>
        </View>
        <View style={{ padding: 20 }}>
          <TextInput
            style={Mystyles.input1}
            onChangeText={i1 => this.setState({ text1: i1 })}
            underlineColorAndroid="#fff"
            placeholderTextColor="#FFF"
            placeholder="Email"
          />
          <TextInput
            style={Mystyles.input2}
            onChangeText={i2 => this.setState({ text2: i2 })}
            underlineColorAndroid="#fff"
            secureTextEntry
            placeholderTextColor="#FFF"
            placeholder="Password"
          />
          <TouchableOpacity style={Mystyles.log3} onPress={this.SaveData}>
            <Text style={Mystyles.text1}>Connect</Text>
          </TouchableOpacity>
          <Text />
          <TouchableOpacity>
            <Text style={Mystyles.text1}>Forgot the Password??</Text>
          </TouchableOpacity>
          <Text />
          <Text />
          <View style={Mystyles.lineMain}>
            <View style={Mystyles.line} />
            <Text style={Mystyles.text2}>or</Text>
            <View style={Mystyles.line} />
          </View>
          <Text />
          <Text />
          <TouchableOpacity style={Mystyles.log4} onPress={this.displayData}>
            <Text style={Mystyles.text1}>
              <Image
                style={Mystyles.logo2}
                source={require("LoginScreen/img/fa.png")}
              />{" "}
              FACEBOOK
            </Text>
          </TouchableOpacity>
        </View>
        <Text />
        <Text />
        <Text />
        <Text style={Mystyles.text1}>Retour</Text>
        <Text />
        <Text />
      </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
        , backgroundColor: "#42e5f4"
    }
});
const Mystyles = StyleSheet.create({
    logov: {
        alignItems: "center"
        , flexGrow: 1
        , justifyContent: "center"
    }
    , logo: {
        height: 100
        , width: 100
    },

    Header: {
        color: "#FFF"
        , fontSize: 30
        , fontWeight: "bold"
        , opacity: 0.9
    }
    , input1: {
        height: 40
        , marginBottom: 20
        , color: "#FFF"
        , paddingHorizontal: 10
    }
    , input2: {
        height: 40
        , marginBottom: 20
        , color: "#FFF"
        , paddingHorizontal: 10
    }
    , log3: {
        backgroundColor: "#bbf7f4"
        , paddingVertical: 15
        , borderRadius: 50
    }
    , text1: {
        color: "#FFFFFF"
        , textAlign: "center"
        , fontWeight: "700"
        , fontSize: 15
    }
    , text2: {
        color: "#fff"
        , alignItems: "center"
        , justifyContent: "center"
        , fontWeight: "bold"
        , fontSize: 15
    }
    , log4: {
        backgroundColor: "#5446f2"
        , paddingVertical: 15
        , borderRadius: 50
    }
    , logo2: {
        height: 20
        , width: 40
    }
    , line: {
        borderBottomWidth: 1
        , borderBottomColor: "#fff"
        , width: 140
        , margin: 5
        , marginTop: 15
        , marginBottom: 20
    }
    , lineMain: {
        flexDirection: "row"
    }
});