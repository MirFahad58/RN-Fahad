//import libraries
import React from "react";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, ListItem, Button } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  AsyncStorage,
} from "react-native";
let index = 0 

// create a component
export default class AclockMain extends React.Component {
  constructor() {
    super();
    this.state = {
      SwitchOnValueHolder: false,
      cards:[]
    };
  } 
  
  getInitialState(){
    return { cards: [] }
  }

  _addRow(){
  this.state.cards.push(index++)
  this.setState({ cards: this.state.cards })

  }
    

  //Switch operation
  ShowAlert = value => {
    this.setState({
      SwitchOnValueHolder: value
    });

    if (value == true) {
      //Perform any task here which you want to execute on Switch ON event.
      alert("Switch is On.");
    } else {
      //Perform any task here which you want to execute on Switch OFF event.
      alert("Switch is Off.");
    }
  };

  render() {
    let rows = this.state.cards.map((r, i) => {
      return <View key={ i }>
                  <Card>
            <View style={styles.TitleItems}>
              <Text style={styles.AlarmTime}>{moment().format("LT")}</Text>
              <Text style={styles.When}>
                {moment().add(1, "days").calendar()}
              </Text>
              <Switch
                onValueChange={value => this.ShowAlert(value)}
                style={styles.SwitchS}
                value={this.state.SwitchOnValueHolder}
              />
            </View>
            <View style={styles.SetTime}>
              <TouchableOpacity style={styles.AlarmButton}>
                <Icon
                  style={styles.TrashIcon}
                  name={"ios-alarm"}
                  size={30}
                  color={"white"}
                />
              </TouchableOpacity>
              <Text style={styles.RemaingTime}>{moment().fromNow()}</Text>
            </View>


            {/* Trash Button */}
            <View style={styles.TrashButtonView}>
              <TouchableOpacity 
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
    })
    return (
      <View style={styles.container}>
      {/* Add icon View */}
        <TouchableOpacity onPress={ this._addRow.bind(this) } style={styles.AddButton}>
          <Icon
            style={styles.PussIcon}
            name={"md-add"}
            size={30}
            color={"tomato"}
          />
        </TouchableOpacity>
        {/* Scroll View Start */}
        <ScrollView style={styles.ScrollView}>
        {/* Card */}
          {rows}
        </ScrollView>
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
  ScrollView: {
    marginBottom: 15
  },
  TitleItems: {
    flexDirection: "row",
    flexWrap: "wrap"
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
  }
});
