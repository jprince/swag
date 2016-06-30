'use strict';

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.component');

(0, _platformBrowserDynamic.bootstrap)(_app.AppComponent, []).then(function (success) {
  return console.log('Bootstrap success');
}).catch(function (error) {
  return console.log(error);
});