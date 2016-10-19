"use strict";
var FooManagerDirective = (function () {
    function FooManagerDirective() {
        this.restrict = 'E';
        this.replace = true;
        this.template = require('!raw!./templates/FooManager.html');
        this.scope = {};
        this.bindToController = {};
        this.controller = FooManagerController;
        this.controllerAs = 'vm';
        FooManagerDirective.prototype.link = function ($scope, $element, $attrs) {
            $element.attr('id', $attrs['managerId']);
        };
    }
    FooManagerDirective.Factory = function () {
        var directive = function () {
            return new FooManagerDirective();
        };
        directive['$inject'] = [];
        return directive;
    };
    return FooManagerDirective;
}());
exports.FooManagerDirective = FooManagerDirective;
var FooManagerController = (function () {
    function FooManagerController($http) {
        this.$http = $http;
        this.New();
        this.Retrieve('first');
    }
    FooManagerController.prototype.ShowMessage = function (status, message) {
        this.MessageStatus = status;
        this.Message = message;
        $('#msgWindow').modal();
    };
    FooManagerController.prototype.Save = function () {
        var _this = this;
        if (this.IsNew) {
            this.$http.post('/Kash.JSTSUT.Web/api/Foos', { Name: this.Name, Status: this.Status }).then(function (req) {
                _this.Id = req.data.Id;
                _this.IsNew = false;
                _this.ShowMessage('Información del sistema', 'Creado correctamente');
            }, function (result) {
                _this.ShowMessage(result.status, result.statusText);
                _this.New();
            });
        }
        else {
            this.$http.put('/Kash.JSTSUT.Web/api/Foos/' + this.Id, { Name: this.Name, Status: this.Status }).then(function (req) {
                _this.ShowMessage('Información del sistema', 'Guardado correctamente');
            }, function (result) {
                _this.ShowMessage(result.status, result.statusText);
                _this.New();
            });
        }
        ;
    };
    FooManagerController.prototype.Delete = function () {
        var _this = this;
        var theId = this.Id;
        this.$http.delete('/Kash.JSTSUT.Web/api/Foos/' + theId, {}).then(function (req) {
            _this.ShowMessage('Información del sistema', 'Eliminado correctamente');
            _this.Retrieve('previous', theId);
            _this.IsNew = false;
        }, function (result) {
            _this.ShowMessage(result.status, result.statusText);
            _this.New();
        });
    };
    FooManagerController.prototype.New = function () {
        this.Id = 0;
        this.Name = '';
        this.Status = '';
        this.IsNew = true;
    };
    FooManagerController.prototype.Retrieve = function (mode, id) {
        var _this = this;
        if (id === void 0) { id = undefined; }
        if (id) {
            this.StartId = id;
        }
        else {
            this.StartId = this.Id;
        }
        var retId = undefined;
        this.$http.get('/Kash.JSTSUT.Web/api/Foos/' + this.StartId + '/' + mode + 'Id', {}).then(function (req) {
            retId = req.data;
            _this.IsNew = false;
            _this.$http.get('/Kash.JSTSUT.Web/api/Foos/' + retId, {}).then(function (req) {
                _this.Id = req.data.Id;
                _this.Name = req.data.Name;
                _this.Status = req.data.Status;
            }, function (result) {
                _this.ShowMessage(result.status, result.statusText);
                _this.New();
            });
        }, function (result) {
            _this.ShowMessage(result.status, result.statusText);
            _this.New();
        });
    };
    return FooManagerController;
}());
exports.FooManagerController = FooManagerController;
//# sourceMappingURL=FooManagerDirective.js.map