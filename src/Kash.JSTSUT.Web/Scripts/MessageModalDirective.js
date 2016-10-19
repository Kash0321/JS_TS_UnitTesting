"use strict";
var MessageModalDirective = (function () {
    function MessageModalDirective() {
        this.restrict = 'E';
        this.replace = true;
        this.template = require('!raw!./templates/messageModal.html');
        this.scope = {};
        this.bindToController = {
            messageStatus: '=',
            message: '='
        };
        this.controller = MessageModalController;
        this.controllerAs = 'vm';
        MessageModalDirective.prototype.link = function ($scope, $element, $attrs) {
            $element.attr('id', $attrs['modalId']);
        };
    }
    MessageModalDirective.Factory = function () {
        var directive = function () {
            return new MessageModalDirective();
        };
        directive['$inject'] = [];
        return directive;
    };
    return MessageModalDirective;
}());
exports.MessageModalDirective = MessageModalDirective;
var MessageModalController = (function () {
    function MessageModalController() {
    }
    return MessageModalController;
}());
exports.MessageModalController = MessageModalController;
//# sourceMappingURL=MessageModalDirective.js.map