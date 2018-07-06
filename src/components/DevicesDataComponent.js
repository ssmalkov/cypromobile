// DevicesDataComponent.js

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import ajax from '../services/FetchProbeHistory';

export default class DevicesDataComponent extends Component<{}> {

  state = {
    probeHistory: []
  }

  async componentDidMount() {
    const probeHistory = await ajax.getProbeHistory('e8639832111cffa939ed53e765ecb17d', this.props.devicesData.name);
    console.log (probeHistory)
    this.setState({ probeHistory });
    
  }

  render() {
    const probeHistory = this.state.probeHistory;
    let data = '';
    probeHistory.forEach(e => {
      data = data + e.time + ' - ' + e.value + '\n';
    });

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./../../resources/icons/loading.png')} />
        <View style={styles.heading}>
          <Text style={styles.price}>123</Text>
          <Text style={styles.title}>Название подробно</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});