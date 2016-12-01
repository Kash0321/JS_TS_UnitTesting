import * as $ from 'jquery';

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/bootstrap/dist/css/bootstrap-theme.css');
require('../Content/css/style.css');

import bootStrap = require('bootstrap');
let bs = bootStrap;

import angular = require('angular');

import { IndexController } from './IndexController';
import { FooManagerDirective, FooManagerController, IFooManagerVM } from './FooManagerDirective';
import { MessageModalDirective, MessageModalController } from './MessageModalDirective';

angular.module('app', []);

angular
    .module('app')
    .controller('IndexController', IndexController);

angular
    .module('app')
    .directive('fooManager', FooManagerDirective.Factory())
    .controller('FooManagerController', FooManagerController);

angular
    .module('app')
    .directive('messageModal', MessageModalDirective.Factory())
    .controller('MessageModalController', MessageModalController);