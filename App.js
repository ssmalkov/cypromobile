// App.js

'use strict';
import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import GetDataComponent from './src/components/GetDataComponent';

export default class App extends React.Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute = {{
           title: 'Данные',
           component: GetDataComponent
         }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});