import React from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity} from 'react-native';
export default class extends React.Component {

    constructor(props){
        super(props);
       
    }


    render() {
            return(
            <View style={styles.container}>
               	<View style={styles.Img}>
				<Image  style={{width:40, height: 70}}
          			source={require('MAlaram/images/logo.png')}/>
                </View>
                <Text style={styles.logoText}>Motivational Alarm App.</Text>
                <Text style={styles.logoText}>Developed by Fahad Talpur</Text>
                <Text style={styles.logoText}>@CicHub,Hyderabad,Sindh</Text>
                <Text style={styles.logoText}>Contact:+923033505713</Text>
                <Text style={styles.logoText}>Facebook:https//:facebook.com/fahadmirtalpur</Text>                                                  			    
                </View> 
                
            )

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
