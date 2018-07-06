// DevicesDataComponent.js

'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class DevicesDataComponent extends Component {
  render() {
    return (
      <View style={styles.main}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  text: {
    marginBottom: 20,
    fontSize: 15,
    textAlign: 'left'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  }

});