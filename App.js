import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

//Object {
//  "coords": Object {
//    "accuracy": 13.859000205993652,
//    "altitude": 56.79999923706055,
//    "heading": 270.88116455078125,
//    "latitude": 37.5435527,
//    "longitude": 126.828619,
//    "speed": 0.00909408275038004,
//  },
//  "mocked": false,
//  "timestamp": 1594816955648,
// }
