// DevicesComponent.js

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
import config from '../config';
import * as Components from './';

class ListItem extends React.PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer} >
            <Image style={styles.thumb} source={require('./../../resources/icons/loading.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.name} numberOfLines={1}>{item.humanName}</Text>
              <Text style={styles.text}>{item.place}</Text>

              {
                item.isManagable
                  ? (<Text style={styles.text}>Доступно управление</Text>)
                  : null
              }

              
              <Text style={styles.text}>группа: {item.groups[0]}</Text>
              <Text style={styles.text}>получено в: {item.lastDataEntryTime}</Text>
            </View>
            <Text style={styles.probeValue}>{item.lastDataEntryValue}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

  export default class DevicesComponent extends Component<{}> {

    static navigationOptions = {
      title: 'Сигналы'
    }

    state = {
      devices: []
    }

    async componentDidMount() {
      const apikey = this.props.navigation.state.params.controllersApiKey;
      const devices = await ajax.getDevicesInfo(apikey);
      this.setState({ devices });
    }

    _keyExtractor = (item, index) => item.id;
  
    _renderItem = ({item, index}) => (
      <ListItem
        item={item}
        index={index}
        onPressItem={this._onPressItem}
      />
    );
  
    _onPressItem = (index) => {
      this.props.navigation.push(
        'ProbeData',
        {
          title: this.state.devices[index].humanName,
          devicesData: this.state.devices[index],
        }
      );
    };
  
    render() {
      return (
        <FlatList
          data={this.state.devices}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
        />
      );
    }
  }

  const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      padding: 10
    },
    thumb: {
      width: 40,
      height: 40,
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