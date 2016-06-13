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
angular.module('app', []).controller('IndexController', IndexController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBJbmRleENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5kZXhDb250cm9sbGVyKCRodHRwKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgfVxyXG4gICAgSW5kZXhDb250cm9sbGVyLnByb3RvdHlwZS5TYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdXJsJywge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICBfdGhpcy5OYW1lID0gcmVxLmRhdGEuTmFtZTtcclxuICAgICAgICAgICAgX3RoaXMuU3RhdHVzID0gcmVxLmRhdGEuU3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEluZGV4Q29udHJvbGxlci5wcm90b3R5cGUuRmlsbERhdGFGb3JUZXN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk5hbWUgPSBcIkthc2hcIjtcclxuICAgICAgICB0aGlzLlN0YXR1cyA9IFwiVGVzdGluZ1wiO1xyXG4gICAgfTtcclxuICAgIEluZGV4Q29udHJvbGxlci4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG4gICAgcmV0dXJuIEluZGV4Q29udHJvbGxlcjtcclxufSgpKTtcclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKS5jb250cm9sbGVyKCdJbmRleENvbnRyb2xsZXInLCBJbmRleENvbnRyb2xsZXIpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
