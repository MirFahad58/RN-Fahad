import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.handleSplash = this.handleSplash.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    async handleAuth() {
        await AsyncStorage.setItem('auth','1234');

        let authKey = AsyncStorage.getItem('auth');

        if(authKey) {
            this.props.navigation.navigate('Dashboard');
        } else {
            this.props.navigation.navigate('Login');
        }
    }

    handleSplash() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        },2000);
    }

    componentDidMount() {
        // this.handleSplash();
        this.handleAuth();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Splash Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});