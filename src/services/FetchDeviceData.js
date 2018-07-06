// FetchDeviceData.js
'use strict';
import config from '../config';

export default {

    async getCurrentValue(controllerApiKey, deviceID)
    {
        //get last available data of a given device
        // /api/v1/data/{id}/get/last/{device}
        //   {
        //     "id": "5b2b867fba53474a7fb180c0",
        //     "value": "62",
        //     "deviceid": "ZWayVDev_zway_5-0-49-3",
        //     "updatetime": 1529579135
        //   }
        
        const URL = 'http://' + config.server + ':' + config.port + '/core/api/v1/data/' + controllerApiKey + '/get/last/' + deviceID;

        const currentData = {
            time: null,
            value: 'no data',
        }

        try {

            let response = await fetch(URL);
            let json = response && await response.json();

            currentData.time = json && json.updatetime || currentData.time;
            currentData.value = json && json.value || currentData.value;

        } catch(err) {
            console.log('CurrentValue Fetch Error :', URL, err);
        }

        return currentData;

    }

}