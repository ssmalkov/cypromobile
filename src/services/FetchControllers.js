// FetchControllers.js
'use strinct'
import config from '../config';

export const getControllersInfo = () => {
  //get credentials
  // {
  //   "apikey": "string",
  //   "id": 0,
  //   "login": "string",
  //   "password": "string",
  //   "registrationtime": "2018-06-21T10:42:43.842Z"
  // }

    //var config = require('../config');
    const URL = 'http://' + config.server + ':' + config.port + '/core/api/v1/credential/get/all';
    return fetch(URL)
            .then((response) => response.json())
            //.then(console.log(response))
            ;

}