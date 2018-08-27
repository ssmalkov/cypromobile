// App.js

'use strict';
import React from 'react';
import { StyleSheet } from 'react-native';
import GetDataComponent from './src/components/GetDataComponent';
import * as Components from './src/components';
//import { createStackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
//import { PushNotifications } from './src/services';

//import { Provider } from 'react-redux';
//import store from './src/store';
// const App = () => (
//  <Provider store={store}>
//    <AppContainer />
//  </Provider>
// );

export default class App extends React.Component {
  render() {

    //PushNotifications.configure();

    // return (
    //     <NavigatorIOS
    //       style={styles.container}
    //       initialRoute = {{
    //        title: 'Данные',
    //        component: GetDataComponent
    //      }} />
    // );

    return (

      <Navigator
        style={styles.container}
      />

    );

  }
}

const Navigator = createStackNavigator({
  Home: { screen: Components.GetDataComponent},
  Controllers: { screen : Components.ControllersComponent},
  Probes: { screen : Components.DevicesComponent},
  ProbeData: { screen : Components.DevicesDataComponent},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




