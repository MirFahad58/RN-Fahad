//import libraries
import React from "react";
import moment from "moment";
// import Icon from "react-native-vector-icons/Ionicons";
import { Button} from 'react-native';

import { Card, ListItem } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import { StackNavigator,TabNavigator } from "react-navigation";
import Icon from 'react-native-fa-icons';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  AsyncStorage,
} from "react-native";


// create a component
export default class Main2 extends React.Component {
  constructor() {
    super();
    this.state = {
      SwitchOnValueHolder:false,
      curDate: "",
      fullDate: "",
      isDateTimePickerVisible: false,
      DateC: "",
      a: "",
      TforShow:'',
      ParseA:'',
      ParseB:'',
      ParseD:'',
    };
    this.DateF = this.DateF.bind(this);
    this.ParsingMethod = this.ParsingMethod.bind(this);
    this.checkdisplay=this.checkdisplay.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      
      this.setState({
        curDate: this.state.fullDate
      });
      this.state.DateC = moment().format("h:mm:ss a");
      if (this.state.ParseA == this.state.DateC) {
       //navigation to video
     this.props.navigation.navigate('Video');
     let obj1={
      AlarmTime:this.state.a,
      ShowTime:this.state.TforShow,
      IsOn:true,
      run:true,
    };
     AsyncStorage.setItem('data1',JSON.stringify(obj1));
      }
    }, 1000);
  }
  DateF() {
    this.state.fullDate= moment().format("MMMM Do YYYY, h:mm:ss a")
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = date => {
    // alert("A date has been picked: " + moment(date).format("MMMM Do YYYY, h:mm:ss a"));
    
    this._hideDateTimePicker();
    this.state.a = moment(date).format("h:mm:ss a");
    this.state.TforShow = moment(date).format("hh:mm a");
    // storing intoAsync
    let obj1={
      AlarmTime:this.state.a,
      ShowTime:this.state.TforShow,
      IsOn:true,
      run:false
    };
     AsyncStorage.setItem('data1',JSON.stringify(obj1));
  };
  trashPress=()=>{
    let obj1={
      AlarmTime:'',
      ShowTime:'',
      IsOn:false,
      run:false,
    }
    AsyncStorage.setItem('data1',JSON.stringify(obj1));
    this.ParsingMethod();
    this.checkdisplay();
  }
  ParsingMethod=async()=>{
    try {
      let check= await AsyncStorage.getItem('data1');
      let parscheck = JSON.parse(check);
      this.state.ParseA=parscheck.AlarmTime;
      this.state.ParseB=parscheck.ShowTime;
      this.state.ParseD=parscheck.IsOn;
      this.state.SwitchOnValueHolder=parscheck.IsOn;
    }
    catch (error) {
      let obj1= {
        AlarmTime:'',
        ShowTime:'',
        IsOn:false,
        run:false
      };
      AsyncStorage.setItem('data1',JSON.stringify(obj1));
    }
   }
  
  checkdisplay (){
        this.ParsingMethod();
        if (this.state.ParseD===true) {
          return(
            <View style={{alignItems:'center'}}>
          <Text style={styles.Cdate}>Alarm sated At- {this.state.ParseB}</Text>
               </View>
          )
        }
        else{
          return(
            <View>
            <Text style={styles.Cdate}>Alarm is not set yet</Text>
            </View>
          )
        }
   
};

  _addRow(){
    this.ParsingMethod();  
    this.DateF();
        return( <View>
            <Card >
                <View style={styles.TitleItems}>
                {this.checkdisplay()}
                  
                  <Switch
                    onValueChange={value => this.ShowAlert(value)}
                    style={styles.SwitchS}
                    value={this.state.SwitchOnValueHolder}
                  />
                </View>
                <View style={styles.SetTime}>
                  <TouchableOpacity
                  onPress={this._showDateTimePicker}
                   style={styles.AlarmButton}>
                    <Icon
                      style={styles.TrashIcon}
                      name={"ios-alarm"}
                      size={30}
                      color={"white"}
                    />
                  </TouchableOpacity>
                  <DateTimePicker
                  mode="time"
                  is24Hour={false}
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
                  <Text style={styles.RemaingTime}>{moment().fromNow()}</Text>
                  
                </View>
        
        
                {/* Trash Button */}
                <View style={styles.TrashButtonView}>
                  <TouchableOpacity 
                  onPress={this.trashPress.bind()} 
                  style={styles.TrashButton}>
                    <Icon
                      style={styles.TrashIcon}
                      name={"ios-trash"}
                      size={30}
                      color={"white"}
                    />
                  </TouchableOpacity>
                </View>
                </Card>
                   </View>
        )
    }

    

  //Switch operation
  ShowAlert = value => {
    this.setState({
      SwitchOnValueHolder: value
    });

    if (value == true) {
      //Perform any task here which you want to execute on Switch ON event.
      this._showDateTimePicker();
      this.ParsingMethod();
      this.checkdisplay();
    } else {
      //Perform any task here which you want to execute on Switch OFF event.
      let obj1={
        AlarmTime:'',
        ShowTime:'',
        IsOn:false,
        run:false
      }
      AsyncStorage.setItem('data1',JSON.stringify(obj1));
      this.ParsingMethod();
      this.checkdisplay();
    }
  };

  render() {
    return (
      <View style={styles.container}>
     
      {/* Add icon View */}
        {/* <TouchableOpacity  style={styles.AddButton}>
          <Icon
            style={styles.PussIcon}
            name={"md-add"}
            size={30}
            color={"tomato"}
          />
        </TouchableOpacity> */}
        {/* Scroll View Start */}
       <View style={styles.ScrollView}>
       <Text style={styles.Cdate2}>{this.state.curDate}</Text>
       {this._addRow()}
       </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center"
  },
  AddButton: {
    alignItems: "center",
    width: 60,
    backgroundColor: "white",
    borderRadius: 100,
    marginVertical: "15%",
    paddingVertical: 13,
    marginBottom: 15
  },
  ScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  TrashButtonView: {
    position: "absolute",
    right: '0%',
    bottom: '0%'
  },
  TrashButton: {
    alignItems: "center",
    width: 60,
    backgroundColor: "#455a64",
    borderRadius: 100,
    marginVertical: "0%",
    paddingVertical: 13,
    marginBottom: 0
  },
  TitleItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 350

  },
  AlarmTime: {
    fontWeight: "bold",
    fontSize: 20
  },
  When: {
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 5,
    marginTop: 0
  },
  SwitchS:{
    position: "absolute",
    right: '0%',
    top: '0%',
    marginLeft: '10%',
    marginTop: 0,
  },
  SetTime:{
    flexDirection: "row",
    flexWrap: "wrap"
  },
  AlarmButton:{
    alignItems: "center",
    width: 60,
    backgroundColor: "tomato",
    borderRadius: 100,
    marginVertical: "0%",
    paddingVertical: 13,
    marginBottom: 0
  },
  RemaingTime:{
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20
  },
  Cdate: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: "1%"
  },
  Cdate2: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: 'rgba(255,255,255,0.9)',
    marginTop: "10%"
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  seted:{
    flexDirection: "row",
    flexWrap: "wrap"
  },
});
