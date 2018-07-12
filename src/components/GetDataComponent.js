// GetDataComponent.js

'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import * as Services from '../services';
import * as Components from './';

export default class GetDataComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: false
      }
      this.handleControllersRequest = this.handleControllersRequest.bind(this);
      this.handleDevicesRequest = this.handleDevicesRequest.bind(this);
    }

  static navigationOptions = {
    header: null
  }

    handleControllersRequest() {
      Services.FetchControllers.getControllersInfo()
          .then((response) => {
              if(!response) {
                this.setState({
                    error: 'Неверный запрос или контроллер!'
                });
              }
            else {
              this.props.navigation.push(
                'Controllers',
                {controllersInfo: response}
              );
              this.setState({
                error: false,
              })
            }
        });
    }

    handleDevicesRequest() {
      this.props.navigation.push('Probes');
    }

  render() {
    let showErr = (
      this.state.error ?
      <Text>
        {this.state.error}
      </Text> :
      <View></View>
    );
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Кипро{__DEV__ ? '(dev mode)': ''}</Text>
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleControllersRequest}
              >
              <Text
                  style={styles.buttonText}>
                  Контроллеры
              </Text>
            </TouchableHighlight>
            {showErr}

            <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleDevicesRequest}
              >
              <Text
                  style={styles.buttonText}>
                  Сигналы
              </Text>
            </TouchableHighlight>
            {showErr}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});