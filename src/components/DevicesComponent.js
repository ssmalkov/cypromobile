// DashboardComponent.js

'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from 'react-native';
import ajax from '../services/FetchDevices';

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
        
          <View>
            <FlatList
              data={this.state.devices}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
              <TouchableHighlight underlayColor='#dddddd'>
                <View>
                  <View style={styles.rowContainer} >
                    <Image style={styles.thumb} source={require('./../../resources/icons/loading.png')}></Image>
                    <View style={styles.textContainer}>
                      <Text style={styles.name} numberOfLines={1}>{item.humanName}</Text>
                      <Text style={styles.text}>{item.place}</Text>
                      {item.isManagable ? <Text style={styles.text}>Доступно управление</Text> : ''}
                      <Text style={styles.text}>группа: {item.groups[0]}</Text>
                      <Text style={styles.text}>получено в: {item.lastDataEntryTime}</Text>
                    </View>
                    <Text style={styles.probeValue}>{item.lastDataEntryValue}</Text>
                  </View>
                  <View style={styles.separator} />
                </View>
                </TouchableHighlight>
              }
              keyExtractor={item => item.givenName}
            />
          </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      padding: 10
    },
    thumb: {
      width: 80,
      height: 80,
      marginRight: 10
    },
    textContainer: {
      flex: 1
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd'
    },
    name: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC'
    },
    givenName: {
      color: 'green'
    },
    text: {
        fontSize: 20,
        color: '#656565'
    },
    probeValue: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC'
    }
    
  });