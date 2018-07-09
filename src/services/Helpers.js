// Helpers.js

'use strict';

export default {
  U2Gtime(unixtime) {
    if (unixtime != null) {
      let newDate = new Date();
      newDate.setTime(unixtime * 1000);
      //dateString = newDate.toUTCString( );
      let dateString = newDate.toISOString().
        replace(/T/, ' ').      // replace T with a space
        replace(/\..+/, '');     // delete the dot and everything after
      return dateString
    }
    else {
      return 0;
    }

  }

}