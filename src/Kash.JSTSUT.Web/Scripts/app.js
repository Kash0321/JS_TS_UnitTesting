define(["require", "exports", './IndexController'], function (require, exports, IndexController_1) {
    "use strict";
    angular.module('app', []).controller('IndexController', IndexController_1.IndexController);
});

define(["require", "exports"], function (require, exports) {
    "use strict";
});

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIklJbmRleFZpZXdNb2RlbC5qcyIsIkluZGV4Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi9JbmRleENvbnRyb2xsZXInXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIEluZGV4Q29udHJvbGxlcl8xKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSkuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgSW5kZXhDb250cm9sbGVyXzEuSW5kZXhDb250cm9sbGVyKTtcclxufSk7XHJcbiIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG59KTtcclxuIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgSW5kZXhDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBJbmRleENvbnRyb2xsZXIoJGh0dHApIHtcclxuICAgICAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBJbmRleENvbnRyb2xsZXIucHJvdG90eXBlLlNhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnL3VybCcsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLk5hbWUgPSByZXEuZGF0YS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuU3RhdHVzID0gcmVxLmRhdGEuU3RhdHVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEluZGV4Q29udHJvbGxlci5wcm90b3R5cGUuRmlsbERhdGFGb3JUZXN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJLYXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhdHVzID0gXCJUZXN0aW5nXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBJbmRleENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGh0dHAnXTtcclxuICAgICAgICByZXR1cm4gSW5kZXhDb250cm9sbGVyO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuSW5kZXhDb250cm9sbGVyID0gSW5kZXhDb250cm9sbGVyO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
