import React from 'react';
import { StyleSheet, View } from 'react-native';
import TakeInput from "./js/Takeinput"
import Pretty from "./js/pretty"
export default class App extends React.Component {

    render() {
        return (
            <View style = { styles.container } behavior="padding">
            <TakeInput/>
            <Pretty/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        , backgroundColor: 'powderblue'
        , alignItems: 'center'
        , justifyContent: 'center'
    , }
, });