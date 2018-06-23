// DashboardComponent.js

'use strict'
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from 'react-native';
import ajax from '../services/FetchDevices';

// export default class DevicesComponent extends Component {
//     render() {
//       return (
//         <View style={styles.main}>
//           <Text style={styles.title}>Устройства</Text>
//         </View>
//       )
//     }
//   }


export default class DevicesComponent extends Component {

    state = {
      devices: []
    }
  
    async componentDidMount() {
      const devices = await ajax.getDevicesInfo();
      this.setState({devices});
    }
  
    render() {
      return (
        <View style={styles.container} >
            <FlatList
            data={this.state.devices}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.humanName}</Text>
              <Text style={styles.important}>{item.plase}</Text>
              <Text style={styles.notImportant}>группа: {item.groups[0]}</Text>
              <Text style={styles.important}>получено в: {item.lastDataEntryTime}</Text>
              <View style={styles.data}>
              <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                //onPress = {this.handleDevicesRequest}
              >
              <Text
                  style={styles.buttonText}>
                  {item.lastDataEntryValue}
              </Text>
            </TouchableHighlight>
              
            </View>
              {/* <Text style={styles.text}>Доступно управление {item.isManagable}</Text> */}
            </View>
            }
            keyExtractor={item => item.givenName}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //padding: 30,
      //marginTop: 45,
      flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2a8ab7'
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      padding: 5,
      borderRadius: 2,
      backgroundColor: 'white'
    },
    name: {
      fontFamily: 'Verdana',
      color: 'green',
      fontSize: 24
    },
    givenName: {
      color: 'green'
    },
    notImportant: {
        fontFamily: 'Verdana',
        fontSize: 10
    },
    important: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    data: {
        flex: 1,
        //padding: 30,
        //marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        //backgroundColor: '#2a8ab7'
    },
    button: {
      height: 30,
      width: 100,
      flexDirection: 'row',
      backgroundColor:'grey',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 2,
      marginTop: 2,
      alignSelf: 'center',
      justifyContent: 'center'
    }
    
  });