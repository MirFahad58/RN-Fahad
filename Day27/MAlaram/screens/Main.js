import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "react-native-modal-datetime-picker";
import { StackNavigator,TabNavigator } from "react-navigation";
import moment from "moment";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curDate: "",
      fullDate: "",
      isDateTimePickerVisible: false,
      DateC: "",
      a: "",
      TforShow:'',
      ParseA:'',
      ParseB:'',
      ParseC:''
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
        // alert("alaram" + this.state.ParseA);
    // children.props.navigation.navigate('Vi deo');
     this.props.navigation.navigate('Video');
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
      TF:true,
    };
     AsyncStorage.setItem('data1',JSON.stringify(obj1));
     this.checkdisplay();
  };

  trashPress=()=>{
    let obj1={
      AlarmTime:'',
      ShowTime:'',
      TF:false,
    }
    AsyncStorage.setItem('data1',JSON.stringify(obj1));
    this.ParsingMethod();
    this.checkdisplay();
  }
  // ViewComponent(){
    checkdisplay (){
      this.ParsingMethod();
          if (this.state.ParseC===true) {
            return(
              <View style={{alignItems:'center'}}>
            <Text style={styles.Cdate}>Alarm seted At- {this.state.ParseB}</Text>
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

   ParsingMethod=async()=>{
    try {
      let check= await AsyncStorage.getItem('data1');
      let parscheck = JSON.parse(check);
      this.state.ParseA=parscheck.AlarmTime;
      this.state.ParseB=parscheck.ShowTime;
      this.state.ParseC=parscheck.TF;
    }
    catch (error) {
      let obj1= {
        AlarmTime:'',
        ShowTime:'',
        TF:false
      };
      AsyncStorage.setItem('data1',JSON.stringify(obj1));
    }
   }
  render() {
    this.ParsingMethod();
    this.DateF();
    return (
      <View style={styles.container}>
        <Text style={styles.Cdate}>{this.state.curDate}</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={this._showDateTimePicker}
          >
            <Text style={styles.buttonText}>Set Alaram</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          mode="time"
          is24Hour={false}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <View style={styles.seted}>
        {this.checkdisplay()}
        </View>
        <View> 
      </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around'
    
  },
  Cdate: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.9)",
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
  TrashButton: {
    alignItems: "center",
    width: 60,
    backgroundColor: "red",
    borderRadius: 100,
    marginVertical: 35,
    paddingVertical: 13,
    marginBottom: 10
  },
});
