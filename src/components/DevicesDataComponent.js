// DevicesDataComponent.js

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  List,
} from 'react-native';
import ajax from '../services/FetchProbeHistory';
import Helpers from '../services/Helpers';

export default class DevicesDataComponent extends Component<{}> {

  state = {
    probeHistory: []
  }

  async componentDidMount() {
    const probeHistory = await ajax.getProbeHistory('e8639832111cffa939ed53e765ecb17d', this.props.devicesData.name);
    this.setState({ probeHistory });
  }

  render() {
    const probeHistory = this.state.probeHistory;
    // let data = '';
    // probeHistory.forEach(e => {
    //   data = data + e.time + ' - ' + e.value + '\n';
    // });

    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={require('./../../resources/icons/loading.png')} />
          <View style={styles.heading}>
            <View style={styles.probeName}>
              <Text style={styles.probeNameText}>{this.props.devicesData.humanName}({probeHistory.length})</Text>
            </View>
            <View style={styles.probeValue}>
              <Text style={styles.probeValueText}>{this.props.devicesData.lastDataEntryValue}</Text>
            </View>
            {/* <View style={styles.separator}/> */}
          </View>
        </View>
        <View style={styles.data}>
          <FlatList
            data={probeHistory}
            renderItem={({ item, index }) => 
              <View>
                <Text style={styles.dataText}>{index+1} {Helpers.U2Gtime(item.time)} - {item.value} </Text>
                {/* <View style={styles.separator} /> */}
              </View>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
    flexDirection: 'row',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300,
  },
  probeName: {
    flex: 0.6,
    alignItems: 'flex-start'
  },
  probeNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC',
  },
  probeValue: {
    flex: 0.4,
    alignItems: 'flex-end'
  },
  probeValueText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC',
  },
  dataText: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  data: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0 
  }
});