import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';

export default class Pretty extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			press: 0,
			press2: 0,
			press3: 0
		}
	}
	onPress1= () => {
		// this.setState({
		// 	press : this.state.press+1
		// })
		this.setState({
	      press: this.state.press+1
	    })
	}
	onPress2= () => {
		// this.setState({
		// 	press : this.state.press+1
		// })
		this.setState({
	      press2: this.state.press2+1
	    })
	}
	onPress3= () => {
		// this.setState({
		// 	press : this.state.press+1
		// })
		this.setState({
	      press3: this.state.press3+1
	    })
	}
	render(){
		return (
			<View>
				<View style = {myStyle.myView}>
					<Text style = {myStyle.myText}>Main Container</Text>
					<Text></Text>
				</View>

				<View style = {myStyle.Container}>

					<TouchableOpacity style = {myStyle.View1} onPress = {this.onPress1}>
						
						<View>
							<Text style = {myStyle.Text}>Touch Me</Text>
						</View>

					</TouchableOpacity>

					<TouchableOpacity style = {myStyle.View2} onPress = {this.onPress2}>						

						<View>
							<Text style = {myStyle.Text}>Touch Me</Text>
						</View>

					</TouchableOpacity>

					<TouchableOpacity style = {myStyle.View3} onPress = {this.onPress3}>						

						<View>
							<Text style = {myStyle.Text}>Touch Me</Text>
						
						</View>

					</TouchableOpacity>

				</View>

					<View>
						<Text style={myStyle.countText}>You pressed red: {this.state.press !== 0 ? this.state.press: 0} times</Text>
						<Text style={myStyle.countText2}>You pressed pink: {this.state.press2 !== 0 ? this.state.press2: 0} times</Text>
						<Text style={myStyle.countText3}>You pressed green: {this.state.press3 !== 0 ? this.state.press3: 0} times</Text>
					</View>
			</View>
		);


	}
}
const myStyle = StyleSheet.create({
myView: {
	backgroundColor: 'blue'
},
Text:{
	textAlign: 'center',
	fontSize: 15,
	fontWeight: 'bold',
	padding: 20
},
myText : {
	color: 'white',
	textAlign: 'center',
	padding: 10,
	fontSize: 25  

},
Container: {
	flexDirection: 'row',
	height: 100
},
View1: {
	flex: 1,
	backgroundColor: 'red',
	padding: 10
},
View2: {
	flex: 1,
	backgroundColor: 'pink',
	padding: 10	
},
View3: {
	flex: 1,
	backgroundColor: 'green',
	padding: 10
},
 countText: {
 	textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold'
 },
 countText2: {
 	textAlign: 'center',
    color: 'pink',
    fontSize: 20,
    fontWeight: 'bold'
 },
countText3: {
 	textAlign: 'center',
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold'
 }

}); 