// DevicesDataComponent.js

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
} from 'react-native';
import ajax from '../services/FetchProbeHistory';
import Helpers from '../services/Helpers';
import { LineChart, Grid } from 'react-native-svg-charts';

export default class DevicesDataComponent extends Component<{}> {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    });

  state = {
    probeHistory: []
  }

  async componentDidMount() {
    const probeHistory = await ajax.getProbeHistory('e8639832111cffa939ed53e765ecb17d', this.props.navigation.state.params.devicesData.name);
    this.setState({ probeHistory });
  }

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    const probeHistory = this.state.probeHistory;
    const chartData = this.state.probeHistory.map((data) => {
      return (data.value)
    })

    return (
      <View style={styles.container}>
        <View>
          {/* <Image style={styles.image} source={require('./../../resources/icons/loading.png')} /> */}
          <LineChart
                style={styles.image}
                data={ chartData }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
          {console.log(chartData)}
          <View style={styles.heading}>
            <View style={styles.probeName}>
              <Text style={styles.probeNameText}>{this.props.navigation.state.params.devicesData.humanName}({probeHistory.length})</Text>
            </View>
            <View style={styles.probeValue}>
              <Text style={styles.probeValueText}>{this.props.navigation.state.params.devicesData.lastDataEntryValue}</Text>
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
  },
  heading: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    //padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 150,
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