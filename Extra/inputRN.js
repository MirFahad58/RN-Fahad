import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Switch
} from 'react-native';

export default class Takeinput extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	textValue : '',
	  	textValue2: '',
	  	switchValue: false 
	  };
	}
	onChangeInput= (value) =>{
		this.setState({
			textValue: value
		});
	}
	inputSubmitted= () =>{
		this.setState({
			textValue2: this.state.textValue,
			textValue: ''
		});	
	}
	switchChanged= (value) =>{
		this.setState({
			switchValue: value
		})
	}

	render(){
		return(
			<View>
			
				<TextInput
					placeholder = 'Enter Text Here'
					value = {this.state.textValue}
					onSubmitEditing = {this.inputSubmitted}
					onChangeText = {(value) => this.onChangeInput(value)}
				/>
			
				<Text></Text>
				
				<TouchableOpacity onPress = {this.inputSubmitted}>
					<Text>Press To Submit</Text>
				</TouchableOpacity>	

				<Text></Text>
				<Text>{this.state.textValue2}</Text>

				<Switch
					value = {this.state.switchValue}
					onValueChange = {(value) => this.switchChanged(value)} 
				/> 
			
			</View>
		);
	}

}