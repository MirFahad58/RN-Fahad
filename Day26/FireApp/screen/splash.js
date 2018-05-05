import React from 'react';
import { View, Text,Image, StyleSheet,AsyncStorage} from 'react-native';

import { StackNavigator} from 'react-navigation';
export default class extends React.Component {
    
    constructor(props){
        super(props);
        this.checkdisplay=this.checkdisplay.bind(this);
    }
   

    //check is it false
    checkdisplay = async() => {
        try {
            let check= await AsyncStorage.getItem("check1");
            let parscheck = JSON.parse(check);
            if (parscheck.checkf=='true') {
                setTimeout(() => {
                    this.props.navigation.navigate('Dashboard');
                },2000);
            }
            else{
                setTimeout(() => {
                    this.props.navigation.navigate('Login');
                },2000);
            }
        } catch (error) {
            let obj = {
                checkf: "false"
        };
        AsyncStorage.setItem("check1", JSON.stringify(obj));
        this.checkdisplay();
        }
    };
   

    render() {
        this.checkdisplay();
            return(
            <View style={styles.container}>
               	<View style={styles.Img}>
				<Image  style={{width:40, height: 70}}
          			source={require('FireApp/images/logo.png')}/>
                <Text style={styles.logoText}>Welcome to ToDo App.</Text>	
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
        color:'rgba(255, 255, 255, 0.7)'
    },
})