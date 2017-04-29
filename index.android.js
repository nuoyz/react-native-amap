/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  MapView from './MapView';
export default class TestAmap extends Component {
  
  render() {
    console.log(MapView);
    return (
      <View style={styles.container}>
        <MapView style={styles.mapView}/>
      </View>
    );
  }
}
/**/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapView: {
    flex: 1,
    alignSelf: 'stretch' 
  }
});

AppRegistry.registerComponent('TestAmap', () => TestAmap);
