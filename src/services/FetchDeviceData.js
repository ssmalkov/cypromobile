// FetchDeviceData.js
'use strinct'
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

        var currentData = {
            time: null,
            value: 'NO DATA',
        }

        console.log( currentData );

        try {

            let response = await fetch(URL);
            
            try {

                let json = await response.json();
                if (json !== null && json.updatetime !== undefined)

            {

                currentData.time = json.updatetime;
                currentData.value = json.value;

            }

            } catch(err) {

                console.log('Could not pars JSON', err);

            }

            console.log(currentData);
            return currentData;

        } catch(err) {
            console.log('CurrentValue Fetch Error :-S', URL, err);
        }

    }

}