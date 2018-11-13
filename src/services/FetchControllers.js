// FetchControllers.js
'use strict';

import * as config from '../config';
import extendableControllers from '../data/Controllers';
import Helpers from './Helpers';
import FetchDevices from './FetchDevices';

export default {
  async getControllersInfo() {
  //Получаем список контроллеров и credentials
  //get credentials
  // {
  //   "apikey": "string",
  //   "id": 0,
  //   "login": "string",
  //   "password": "string",
  //   "registrationtime": "2018-06-21T10:42:43.842Z"
  // }

  const URL = 'http://' + config.server + ':' + config.port + '/core/api/v1/credential/get/all';

      try {
              let response = await fetch(URL);
              let json = response && await response.json();
              let controllers = json && await extendControlersData(json);

              for (let i = 0; i < controllers.length; i++) {
                controllers[i].numberOfDevices = await FetchDevices.getDevicesInfo(controllers[i].apikey, true);
              }

              return controllers;
          }
      catch(err) {
          console.log(err)
      }

  }
}

// TODO move to the backend
function extendControlersData(controllersToImrove) {

  if (controllersToImrove != null) {

    for (let i = 0; i < controllersToImrove.length; i++) {

    
        const extraData = extendableControllers.find(d => d.apikey === controllersToImrove[i].apikey);
        if (extraData != null) {
          controllersToImrove[i].location = extraData.location;
        } else {
          controllersToImrove[i].location = "Адрес не указан!";
        }

    }

    return controllersToImrove;

  }
}