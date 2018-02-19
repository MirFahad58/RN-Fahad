import React from 'react';
import { 
    View, 
    TextInput, 
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage 
} from 'react-native';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '',multi: []}
        this.handleLogin = this.handleLogin.bind(this);
    }

    async handleLogin() {
        this.state.multi.push({
            username: this.state.username,
            password: this.state.password
        });

        await AsyncStorage.setItem('multi',JSON.stringify(this.state.multi))
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput 
                    style={Styles.TextInput}
                    placeholder="Username"
                    onChangeText={(e) => {this.setState({username: e})}}
                />
                <TextInput 
                    style={Styles.TextInput}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(e) => {this.setState({password: e})}}
                />

                <TouchableOpacity
                    style={Styles.button} 
                    onPress={this.handleLogin}>
                    <Text style={{color: 'white'}}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        width: 100,
    },
    button: {
        backgroundColor: 'black',
    }
})