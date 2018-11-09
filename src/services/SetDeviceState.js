// SetDeviceState.js
'use strict';

import config from '../config';



export default {

  async getProbeHistory(controllerApiKey, deviceID, newState)
  {

      const URL = 'http://' + config.server + ':' + config.port + '/core/api/v1/manage/' + controllerApiKey + '/set/' + deviceID + '/';

      try {

          let response = await fetch(URL+newState);
          let json = response && await response.json();
          // json && json.forEach(e => {
          //   probeHystory.push({time: e.updatetime, value: e.value});
          // });

      } catch(err) {
          console.log('CurrentValue Fetch Error :', URL, err);
      }

      return;

  }

}