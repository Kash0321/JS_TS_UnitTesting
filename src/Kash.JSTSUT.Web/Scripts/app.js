"use strict";
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/bootstrap/dist/css/bootstrap-theme.css');
require('../Content/css/style.css');
var bootStrap = require('bootstrap');
var bs = bootStrap;
var angular = require('angular');
var indexController_1 = require('./indexController');
var FooManagerDirective_1 = require('./FooManagerDirective');
var MessageModalDirective_1 = require('./MessageModalDirective');
angular.module('app', []);
angular
    .module('app')
    .controller('indexController', indexController_1.IndexController);
angular
    .module('app')
    .directive('fooManager', FooManagerDirective_1.FooManagerDirective.Factory())
    .controller('fooManagerController', FooManagerDirective_1.FooManagerController);
angular
    .module('app')
    .directive('messageModal', MessageModalDirective_1.MessageModalDirective.Factory())
    .controller('messageModalController', MessageModalDirective_1.MessageModalController);
//# sourceMappingURL=app.js.map