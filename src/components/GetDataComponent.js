// GetDataComponent.js

'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Keyboard
} from 'react-native';

import * as Services from '../services';
import * as Components from './';

import {Constants, Notifications, Permissions} from 'expo';

// async function getToken() {
//   // Remote notifications do not work in simulators, only on device
//   if (!Constants.isDevice) {
//     return;
//   }
//   let { status } = await Permissions.askAsync(
//     Permissions.NOTIFICATIONS,
//   );
//   if (status !== 'granted') {
//     return;
//   }

//   console.log('PushStatus: ', status);

//   let value = await Notifications.getExpoPushTokenAsync();
//   console.log('Our token', value);
// }

export default class GetDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
    this.handleControllersRequest = this.handleControllersRequest.bind(this);
    //this.handleDevicesRequest = this.handleDevicesRequest.bind(this);
  }

  static navigationOptions = {
    header: null
  }

  // handlePushLocal(){
  //   const schedulingOptions = {
  //     time: (new Date()).getTime() + 3000
  //   }

  //   const localNotification = {
  //     // "to": "<TOKEN>",
  //     // "title": "Notification",
  //     // "body": "Remote notification body",
  //     // "data": { "value": "Hello remote world!" }

  //         title: 'done',
  //         body: Services.Helpers.U2Gtime(schedulingOptions.time),
  //         data: { "value": "Hello remote world!" }




  //       };
    
  //       // Notifications show only when app is not active.
  //       // (ie. another app being used or device's screen is locked)
  //       Notifications.scheduleLocalNotificationAsync(
  //         localNotification, schedulingOptions
  //       );
  // }

  // componentDidMount() {
  //   getToken();
  //   this.listener = Notifications.addListener(this.handleNotification);
  // }

  // componentWillUnmount() {
  //   this.listener && this.listener.remove();
  // }

  // handleNotification = ({ origin, data }) => {
  //   console.log(`Push notification ${origin} with data:`, JSON.stringify(data));
  //   alert(data.value);
  // };

  handleControllersRequest() {
    Services.FetchControllers.getControllersInfo()
      .then((response) => {
        // console.log(response);
        if (!response) {
          this.setState({
            error: 'Неверный запрос или контроллер!'
          });
        }
        else {
          this.props.navigation.push(
            'Controllers',
            { controllersInfo: response }
          );
          this.setState({
            error: false,
          })
        }
      });
  }

  // handleDevicesRequest() {
  //   this.props.navigation.push('Probes');
  // }


//-------------Notifications
  // onSubmit(e) {
  //   Keyboard.dismiss();

  //   const localNotification = {
  //     title: 'done',
  //     body: 'done!'
  //   };

  //   const schedulingOptions = {
  //     time: (new Date()).getTime() + Number(e.nativeEvent.text)
  //   }

  //   // Notifications show only when app is not active.
  //   // (ie. another app being used or device's screen is locked)
  //   Notifications.scheduleLocalNotificationAsync(
  //     localNotification, schedulingOptions
  //   );
  // }

  // handleNotification() {
  //   console.warn('ok! got your notif');
    
  // }

  // async componentDidMount() {
  //   // We need to ask for Notification permissions for ios devices
  //   let result = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  //   if (Constants.isDevice && result.status === 'granted') {
  //     console.log('Notification permissions granted.')
  //   }
  //   console.log('Permission Request: ', result);

  //   // If we want to do something with the notification when the app
  //   // is active, we need to listen to notification events and 
  //   // handle them in a callback
  //   Notifications.addListener(this.handleNotification);
  // }
//---------------------------------

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
        <Text style={styles.title}>Кипро{__DEV__ ? '(dev mode)' : ''}</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleControllersRequest}
        >
          <Text
            style={styles.buttonText}>
            Контроллеры
              </Text>
        </TouchableHighlight>
        {showErr}

        {/* <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleDevicesRequest}
        >
          <Text
            style={styles.buttonText}>
            Сигналы
              </Text>
        </TouchableHighlight>
        {showErr} */}

        {/* <TextInput
                    onSubmitEditing={this.onSubmit}
                    placeholder={'time in ms'}
                /> */}

        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handlePushLocal}
              >
              <Text
                  style={styles.buttonText}>
                  Push (локально)
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
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});