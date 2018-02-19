import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Dashboard </Text>
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