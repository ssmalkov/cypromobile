// DashboardComponent.js

'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class ControllersComponent extends Component {

  static navigationOptions = {
    title: '№1 (Москва)'
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Учетные данные</Text>
        <Text style={styles.text}>Идентификатор: {this.props.navigation.state.params.controllersInfo[0].apikey}</Text>
        <Text style={styles.text}>Дата региcтрации: {this.props.navigation.state.params.controllersInfo[0].egistrationtime}</Text>
        <Text style={styles.text}>Логин: {this.props.navigation.state.params.controllersInfo[0].login}</Text>
        <Text style={styles.text}>Пароль: {this.props.navigation.state.params.controllersInfo[0].password}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
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