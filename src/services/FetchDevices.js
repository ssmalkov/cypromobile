// FetchDevices.js
'use strict';
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

        try {

                let response = await fetch(URL);
                let json = response && await response.json();

                let devices = json && await _removeFakeDevices(json);
                devices = devices && await _makeFormatedDevices(devices);
                devices = devices && addExtraData(devices);
                devices = devices && devices
                  .filter(p => !p.groups.includes('system'))
                  .sort(function(a, b) { return a.order - b.order;})
                  ;

                for (let i = devices.length - 1; i >= 0; i--)
                {

                    let currentValue = await FetchDeviceData.getCurrentValue(controllerApiKey, devices[i].name);

                    if (_checkIfOutdated(currentValue.time)){
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
            const nonFakeAttribute = 'WayVDev_zway_';

            return devices.filter(d => d.name && d.name.includes(nonFakeAttribute));

}

function _makeFormatedDevices(rawDevices)
{

    for (let i = rawDevices.length - 1; i >= 0; i--) 
    {
      rawDevices[i].modificationTime = U2Gtime(rawDevices[i].modificationTime);
      rawDevices[i].lastDataEntryTime = '';
      rawDevices[i].lastDataEntryValue = '';
      rawDevices[i].isManagable = checkIfDeviceIsManagable(rawDevices[i]);
    }

    return rawDevices;
}

function checkIfDeviceIsManagable(device)
{
  //проверка на managable
    
    let deviceIsManagable = device.name === 'ZWayVDev_zway_12-0-37' ? true : false;
  
  return deviceIsManagable;
}

function _checkIfOutdated(unixTime)
{

  let now = new Date ();
  const outdateHours = 12;

  unixTime * 1000;

  return unixTime || unixTime < now.setHours(now.getHours() - outdateHours) ? true : false;

}

function U2Gtime(unixtime) {
    if (unixtime != null)
    {
      let newDate = new Date( );
      newDate.setTime(unixtime * 1000);
      //dateString = newDate.toUTCString( );
      let dateString = newDate.toISOString().
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

    for (let i = 0; i < devicesToImprove.length; i++){

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