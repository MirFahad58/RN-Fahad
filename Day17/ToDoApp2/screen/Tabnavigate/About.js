import React from "react";
import { View, Text, StyleSheet} from "react-native";
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
 
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>ToDo App About.</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)"
  },
});
