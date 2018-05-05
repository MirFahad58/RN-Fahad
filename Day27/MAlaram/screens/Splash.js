import React from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';

import { StackNavigator} from 'react-navigation';
export default class extends React.Component {

    constructor(props){
        super(props);
        this.checkdisplay=this.checkdisplay.bind(this);
    }


    //check is it false
    checkdisplay() {
                setTimeout(() => {
                    this.props.navigation.navigate('MainTab');
                },2000);
    };


    render() {
        this.checkdisplay();
            return(
            <View style={styles.container}>
               	<View style={styles.Img}>
				<Image  style={{width:40, height: 70}}
          			source={require('MAlaram/images/logo.png')}/>
                <Text style={styles.logoText}>Welcome to Motivational Alarm App.</Text>
  			    </View>

            </View>)

    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
      },
      Img : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
      logoText : {
        marginVertical: 15,
        fontSize:18,
        fontWeight: "bold",
        color:'rgba(255, 255, 255, 0.9)'
    },
})
