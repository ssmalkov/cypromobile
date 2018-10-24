// FetchProbeHistory.js
'use strict';

import config from '../config';



export default {

  async getProbeHistory(controllerApiKey, deviceID)
  {
    //get all historical data of a given Probe
    // /api/v1/data/{id}/get/all/{device}
    // [
    //   {
    //     "id": "5b2b867fba53474a7fb180c0",
    //     "value": "62",
    //     "deviceid": "ZWayVDev_zway_5-0-49-3",
    //     "updatetime": 1529579135
    //   }
    // ]
      
      const URL = 'http://' + config.server + ':' + config.port + '/core/api/v1/data/' + controllerApiKey + '/get/all/' + deviceID;

      const probeHystoryItem = {
        time: '',
        value: ''
      };

      let probeHystory = [];

      try {

          let response = await fetch(URL);
          let json = response && await response.json();
          json && json.forEach(e => {
            probeHystory.push({time: e.updatetime, value: e.value});
          });

      } catch(err) {
          console.log('CurrentValue Fetch Error :', URL, err);
      }

      return _convertValuesToInt(probeHystory);

  }

}

function _convertValuesToInt(valuesFromProbes) {

  let convertedToIntData = [];

  for (let i = valuesFromProbes.length - 1; i >= 0; i--) {

    switch (valuesFromProbes[i].value) {
      case 'on':
        valuesFromProbes[i].value = 1;
        break;
        case 'off':
        valuesFromProbes[i].value = 0;
        break;
      default:
        valuesFromProbes[i].value = parseInt(valuesFromProbes[i].value);
        break;
    }

  }

  return valuesFromProbes;

}