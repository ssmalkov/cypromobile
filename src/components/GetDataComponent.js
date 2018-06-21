// GetDataComponent.js

'use strinct'
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { getControllersInfo } from '../services/FetchControllers';
//import { getDevicesInfo } from '../services/FetchDevices';
import ControllersComponent from './ControllersComponent';
import DevicesComponent from './DevicesComponent';


export default class GetDataComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        //username: '',
        error: false
      }
//      this.handleChange = this.handleChange.bind(this);
      this.handleControllersRequest = this.handleControllersRequest.bind(this);
      this.handleDevicesRequest = this.handleDevicesRequest.bind(this);
    }
    // handleChange(e) {
    //   this.setState({
    //     username: e.nativeEvent.text
    //   });
    // }
    handleControllersRequest() {
      getControllersInfo()
          .then((response) => {
              console.log(response);
              if(response.message === 'Not Found') {
                this.setState({
                    error: 'Неверный запрос или контроллер!'
                });
              }
            else {
              this.props.navigator.push({
                title: 'Зарегистрированные контроллеры',
                passProps: {controllersInfo: response},
                component: ControllersComponent 
              });
              this.setState({
                error: false,
                //username: ''
              })
            }
        });
    }

    handleDevicesRequest() {
      this.props.navigator.push({
                  title: 'Зарегистрированные устройства',
                  //passProps: {devicesInfo: response},
                  component: DevicesComponent 
                });
      // getDevicesInfo()
      //     .then((response) => {
      //         //console.log(response);
      //         if(response.message === 'Not Found') {
      //           this.setState({
      //               error: 'Неверный запрос или устройство!'
      //           });
      //         }
      //       else {
      //         this.props.navigator.push({
      //           title: 'Зарегестрированные устройства',
      //           passProps: {devicesInfo: response},
      //           component: DevicesComponent 
      //         });
      //         this.setState({
      //           error: false,
      //           //username: ''
      //         })
      //       }
      //   });
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
        <Text style={styles.title}>Кипро</Text>
        {/* <TextInput
              style={styles.searchInput}
              onChange={this.handleChange}
            /> */}
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
                  Устройства
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
    marginTop: 65,
    flexDirection: 'column',
    //justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  // },
  // searchInput: {
  //   height: 50,
  //   padding: 4,
  //   marginRight: 5,
  //   fontSize: 23,
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   borderRadius: 8,
  //   color: 'white'
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