// FetchDevices.js
'use strinct'
import FetchDeviceData from './FetchDeviceData';
import config from '../config';
import devicesExtraData from '../data/Devices';

export default {
    async getDevicesInfo() {
      //Получаем список устройств
      //get devices /api/v1/device/{id}/get/all последние из базы

      // [
      //   {
      //     "id": "5b09d760ba534726ee552035"
      //     "name": "ZWayVDev_zway_Remote_5-0-0-B",
      //     "givenName": "Philio Technology Corp (5.0.0) Button",
      //     "vendorString": null,
      //     "deviceTypeString": "switchControl",
      //     "probeTitle": "",
      //     "lastReceived": null,
      //     "lastSend": null,
      //     "isFailed": false,
      //     "modificationTime": 1529042362,
      //     "commandClasses": null
      //   },
      // ]

      const controllerApiKey = 'e8639832111cffa939ed53e765ecb17d';
      const URL = 'http://' + config.server + ':' + config.port + '/core/api/v1/device/' + controllerApiKey + '/get/all';

      //var now = Date.now();
      var now = new Date ();
      var now1 = new Date ();

        try {

                let response = await fetch(URL);
                let json = await response.json();
                let rawDevices = await _removeFakeDevices(json);
                let devices = await _makeFormatedDevices(rawDevices);
                devices = addExtraData(devices);
                devices = devices
                  .filter(p => !p.groups.includes('system'))
                  .sort(function(a, b) { return a.order - b.order;})
                  ;

                for (var i = devices.length - 1; i >= 0; i--)
                {
                    let currentValue = await FetchDeviceData.getCurrentValue(controllerApiKey, devices[i].name);

                    if (currentValue.time * 1000 < now.setHours(now.getHours() - 12))
                    {

                      devices[i].lastDataEntryTime = U2Gtime(currentValue.time) + ' Данные устарели!';

                    } else {

                      devices[i].lastDataEntryTime = U2Gtime(currentValue.time);

                    }

                    devices[i].lastDataEntryValue = currentValue.value;
                }

                return devices;

            }
        catch(err) {
            console.log(err)
        }

    }
}

function _removeFakeDevices(devices)
{
            //Убираем пустые системные устройства
            for (var i = devices.length - 1; i >= 0; i--) 
            {
              if(devices[i].name === null) 
              {
                devices.splice(i, 1);
              }
            }
            
            //Убираем не ZWayVDev_zway_ устройства
            for (var i = devices.length - 1; i >= 0; i--) 
            {
              if(devices[i].name.indexOf('ZWayVDev_zway_') === -1) 
              {
                devices.splice(i, 1);
              }
            }

            return devices;
}

function _makeFormatedDevices(rawDevices)
{
    let devices = []
    for (var i = rawDevices.length - 1; i >= 0; i--) 
    {
        devices.push(
            {
              id: rawDevices[i].id,
              name: rawDevices[i].name,
              givenName: rawDevices[i].givenName,
              vendorString: rawDevices[i].vendorString,
              deviceTypeString: rawDevices[i].deviceTypeString,
              probeTitle: rawDevices[i].probeTitle,
              lastReceived: rawDevices[i].lastReceived,
              lastSend: rawDevices[i].lastSend,
              isFailed: rawDevices[i].isFailed,
              modificationTime: U2Gtime(rawDevices[i].modificationTime),
              commandClasses: rawDevices[i].commandClasses,
              lastDataEntryTime: '',
              lastDataEntryValue: '',
              isManagable: checkIfDeviceIsManagable(rawDevices[i]),
            })
    }
    return devices;
}

function checkIfDeviceIsManagable(device)
{
    
  var deviceIsManagable = false;
  //проверка на managable
    
  if (device.name === 'ZWayVDev_zway_12-0-37')
  {
    deviceIsManagable = true;
  }
  
  return deviceIsManagable;
}

function U2Gtime(unixtime) {
    if (unixtime != null)
    {
      var newDate = new Date( );
      newDate.setTime(unixtime * 1000);
      //dateString = newDate.toUTCString( );
      var dateString = newDate.toISOString().
      replace(/T/, ' ').      // replace T with a space
      replace(/\..+/, '');     // delete the dot and everything after
      return dateString
    }
    else 
    {
      return 0;
    }
}

function addExtraData(devicesToImprove) {

  if (devicesToImprove != null) {

    for (var i = 0; i < devicesToImprove.length; i++){

      const extraData = devicesExtraData.find(d => d.name === devicesToImprove[i].name);
      devicesToImprove[i].parentDeviceId = extraData.parentDeviceId;
      devicesToImprove[i].parentDeviceType = extraData.parentDeviceType;
      devicesToImprove[i].probeType = extraData.probeType;
      devicesToImprove[i].humanName = extraData.humanName;
      devicesToImprove[i].place = extraData.place;
      devicesToImprove[i].order = extraData.order;
      devicesToImprove[i].groups = extraData.groups;
      devicesToImprove[i].parentDeviceType = extraData.parentDeviceType;

    }

  }

  return devicesToImprove;

}