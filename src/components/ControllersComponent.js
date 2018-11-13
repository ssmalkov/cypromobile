// ControllersComponent.js

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
import ajax from '../services/FetchControllers';
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
            {/* <Image style={styles.thumb} source={require('./../../resources/icons/loading.png')} /> */}
            <View style={styles.textContainer}>
              <Text style={styles.name} >{item.location}</Text>
              {/* <Text style={styles.text}>{item.apikey}</Text>               */}
              {/* <Text style={styles.text}>логин: {item.login}</Text>
              <Text style={styles.text}>пароль: {item.password}</Text> */}
              {/* <Text style={styles.text}>зарегистрировано: {item.registrationtime}</Text> */}
            </View>
            <Text style={styles.probeValue}>{item.numberOfDevices}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

  export default class ControllersComponent extends Component<{}> {

    static navigationOptions = {
      title: 'Объекты'
    }

    state = {
      controllers: []
    }

    async componentDidMount() {
      const controllers = await ajax.getControllersInfo();
      this.setState({ controllers });
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
        'Probes',
        {
          title: this.state.controllers[index].location,
          controllersApiKey: this.state.controllers[index].apikey,
        }
      );
    };
  
    render() {
      return (
        <FlatList
          data={this.state.controllers}
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

