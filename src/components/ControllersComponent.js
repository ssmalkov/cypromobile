// DashboardComponent.js

'use strict'
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class ControllersComponent extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Учетные данные контроллера №1 (Москва)</Text>
        <Text style={styles.text}>Идентификатор: {this.props.controllersInfo[0].apikey}</Text>
        <Text style={styles.text}>Дата региатрации: {this.props.controllersInfo[0].egistrationtime}</Text>
        <Text style={styles.text}>Логин: {this.props.controllersInfo[0].login}</Text>
        <Text style={styles.text}>Пароль: {this.props.controllersInfo[0].password}</Text>
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