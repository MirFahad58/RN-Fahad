import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class Dummy extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText() {
        console.log(this.state.text);
    }

    render() {
        return (
            <View style = { styles.container }>
                <TextInput 
                    placeholder="Enter anything"
                    onChangeText= {(e) => this.setState({text: e})}
                />
                <Button
                    onPress={this.handleChangeText}
                    title='Click'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        , justifyContent: 'center'
        , alignContent: 'center'
    }
})