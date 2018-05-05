import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  AsyncStorage,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
// import {Video} from 'expo';
// import { Icon } from "react-native-elements";
import Icon from 'react-native-fa-icons';
// import Icon from 'react-native-vector-icons/Ionicons';
import YouTube from "react-native-youtube";
import { StackNavigator } from "react-navigation";
export default class VideoA extends React.Component {
  //Modal
  constructor(props) {
    super(props);
    this.state = {
      Parse1: "",
      Parse2: "",
      parse4: "",
      modalVisible: true,
      mute: false,
      shouldPlay: true,
      no1: Math.round(Math.random() * 10),
      no2: Math.round(Math.random() * 10),
      no3: Math.round(Math.random() * 10),
      ans: "",
      _input: "",
      run1: ""
    };
    this.ModelingMethod = this.ModelingMethod.bind(this);
    this.Modaldisplay1 = this.Modaldisplay1.bind(this);
    this._setModelVisible = this._setModelVisible.bind(this);
  }

  ModelingMethod = async () => {
    try {
      let check = await AsyncStorage.getItem("data1");
      let parscheck = JSON.parse(check);
      this.state.Parse1 = parscheck.AlarmTime;
      this.state.Parse2 = parscheck.ShowTime;
      this.state.Parse4 = parscheck.IsOn;
      this.setState({ run1: parscheck.run });
      this.Modaldisplay1();
    } catch (error) {
      let obj1 = {
        AlarmTime: "",
        ShowTime: "",
        IsOn: false,
        run: false
      };
      AsyncStorage.setItem("data1", JSON.stringify(obj1));
    }
  };
  _setModelVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  _setModelClose = visible => {
    this.state.ans = this.state.no1 * this.state.no2 + this.state.no3;
    if (this.state._input == this.state.ans) {
      let obj1 = {
        AlarmTime: "",
        ShowTime: "",
        IsOn: false,
        run: false
      };
      AsyncStorage.setItem("data1", JSON.stringify(obj1));
      this.setState({ run1: visible });
      this.setState({ modalVisible: visible });

      //  this.ModelingMethod();
    } else {
      alert(this.state.Parse4.toString());
    }
  };

  Modaldisplay1() {
    //  this.ModelingMethod();
    if (Boolean(this.state.run1) == true) {
      var modalBackgroundStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      };

      return (
        <Modal
          transparent={true}
          visible={true}
          onRequestClose={() => this._setModelVisible(false)}
        >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={styles.innerContainer}>
              <Text style={styles.logoText}>
                Solve the equation to close the Alarm
              </Text>
              <Text style={styles.logoText}>
                {this.state.no1} * {this.state.no2} + {this.state.no3}=
              </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={anss => this.setState({ _input: anss })}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="your answer"
                placeholderTextColor="#ffffff"
                selectionColor="#fff"
              />
              <TouchableOpacity
                style={styles.button1}
                onPress={() => this._setModelClose(false)}
              >
                <Text style={styles.buttonText1}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
    }
  }

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay
    }));
  };

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute
    }));
  };
  render() {
    this.ModelingMethod();
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: "center" }}> React Native Video </Text>
          {/* <Video
              source={require('../Audio/1.mp3')}
              shouldPlay={this.state.shouldPlay}
              resizeMode="cover"
              style={{ width:400, height: 300 }}
              isMuted={this.state.mute}
            />
            <View style={styles.controlBar}>
              <MaterialIcons 
                name={this.state.mute ? "volume-mute" : "volume-up"}
                size={45} 
                color="white" 
                onPress={this.handleVolume} 
              />
              <Icon 
                name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                size={45} 
                color="white" 
                onPress={this.handlePlayAndPause} 
              />
            </View> */}
          <YouTube
            apiKey="AIzaSyDz7jyinbNFbEQraKHawLkmk9Kw9Tl5XkM"
            videoId="KVZ-P-ZI6W4" // The YouTube video ID
            play={true} // control playback of video with true/false
            fullscreen={false} // control whether the video should play in fullscreen or inline
            loop={true} // control whether the video should loop when ended
            // onReady={e => this.setState({ isReady: true })}
            // onChangeState={e => this.setState({ status: e.state })}
            // onChangeQuality={e => this.setState({ quality: e.quality })}
            // onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: "stretch", height: 300 }}
          />
        </View>
        {this.Modaldisplay1()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  logoText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10
  },
  inputBox: {
    height: 45,
    width: 200,
    backgroundColor: "rgba(25, 76,255,0.6)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 25,
    color: "black",
    marginVertical: 10,
    marginBottom: 10
  },
  button1: {
    width: 200,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)"
  },
  row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    marginBottom: 20
  },
  rowTitle: {
    flex: 1,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden"
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: "center"
  },
  modalButton: {
    marginTop: 10
  }
});
// container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   }
