import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigation } from 'react-navigation';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    WELCOME TO SPLASH
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})