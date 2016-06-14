define(["require", "exports"], function (require, exports) {
    "use strict";
    var IndexController = (function () {
        function IndexController($http) {
            this.$http = $http;
        }
        IndexController.prototype.Save = function () {
            var _this = this;
            this.$http.post('/url', {}).then(function (req) {
                _this.Name = req.data.Name;
                _this.Status = req.data.Status;
            });
        };
        IndexController.prototype.FillDataForTests = function () {
            this.Name = "Kash";
            this.Status = "Testing";
        };
        IndexController.$inject = ['$http'];
        return IndexController;
    }());
    exports.IndexController = IndexController;
});
