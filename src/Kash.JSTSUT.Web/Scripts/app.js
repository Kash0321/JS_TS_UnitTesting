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

//describe("IndexController Tests", () => {
//    var httpService: any;
//    var promise;
//    beforeEach(() => {
//        httpService = jasmine.createSpyObj("httpService", ["get"]);
//        inject(($q) => {
//            promise = $q;
//        });
//    });
//    it("Test001", (done) => {
//        //var deferer = promise.defer();
//        //deferer.resolve("sd sdjskdsjd");
//        //httpService.get.and.returnValue(deferer.promise);
//        var aa = new IndexController(httpService);
//        //user.then((value) => {
//        //    expect(value).toBe("dsds");
//        //    done();
//        //}, (reason) => {
//        //    expect(reason).toBe("");
//        //    done();
//        //});
//    }, 5000);
//}); 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIkluZGV4Q29udHJvbGxlci5zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBJbmRleENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5kZXhDb250cm9sbGVyKCRodHRwKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgfVxyXG4gICAgSW5kZXhDb250cm9sbGVyLnByb3RvdHlwZS5TYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCcvdXJsJywge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICBfdGhpcy5OYW1lID0gcmVxLmRhdGEuTmFtZTtcclxuICAgICAgICAgICAgX3RoaXMuU3RhdHVzID0gcmVxLmRhdGEuU3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEluZGV4Q29udHJvbGxlci5wcm90b3R5cGUuRmlsbERhdGFGb3JUZXN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLk5hbWUgPSBcIkthc2hcIjtcclxuICAgICAgICB0aGlzLlN0YXR1cyA9IFwiVGVzdGluZ1wiO1xyXG4gICAgfTtcclxuICAgIEluZGV4Q29udHJvbGxlci4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG4gICAgcmV0dXJuIEluZGV4Q29udHJvbGxlcjtcclxufSgpKTtcclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKS5jb250cm9sbGVyKCdJbmRleENvbnRyb2xsZXInLCBJbmRleENvbnRyb2xsZXIpO1xyXG4iLCIvL2Rlc2NyaWJlKFwiSW5kZXhDb250cm9sbGVyIFRlc3RzXCIsICgpID0+IHtcclxuLy8gICAgdmFyIGh0dHBTZXJ2aWNlOiBhbnk7XHJcbi8vICAgIHZhciBwcm9taXNlO1xyXG4vLyAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuLy8gICAgICAgIGh0dHBTZXJ2aWNlID0gamFzbWluZS5jcmVhdGVTcHlPYmooXCJodHRwU2VydmljZVwiLCBbXCJnZXRcIl0pO1xyXG4vLyAgICAgICAgaW5qZWN0KCgkcSkgPT4ge1xyXG4vLyAgICAgICAgICAgIHByb21pc2UgPSAkcTtcclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9KTtcclxuLy8gICAgaXQoXCJUZXN0MDAxXCIsIChkb25lKSA9PiB7XHJcbi8vICAgICAgICAvL3ZhciBkZWZlcmVyID0gcHJvbWlzZS5kZWZlcigpO1xyXG4vLyAgICAgICAgLy9kZWZlcmVyLnJlc29sdmUoXCJzZCBzZGpza2RzamRcIik7XHJcbi8vICAgICAgICAvL2h0dHBTZXJ2aWNlLmdldC5hbmQucmV0dXJuVmFsdWUoZGVmZXJlci5wcm9taXNlKTtcclxuLy8gICAgICAgIHZhciBhYSA9IG5ldyBJbmRleENvbnRyb2xsZXIoaHR0cFNlcnZpY2UpO1xyXG4vLyAgICAgICAgLy91c2VyLnRoZW4oKHZhbHVlKSA9PiB7XHJcbi8vICAgICAgICAvLyAgICBleHBlY3QodmFsdWUpLnRvQmUoXCJkc2RzXCIpO1xyXG4vLyAgICAgICAgLy8gICAgZG9uZSgpO1xyXG4vLyAgICAgICAgLy99LCAocmVhc29uKSA9PiB7XHJcbi8vICAgICAgICAvLyAgICBleHBlY3QocmVhc29uKS50b0JlKFwiXCIpO1xyXG4vLyAgICAgICAgLy8gICAgZG9uZSgpO1xyXG4vLyAgICAgICAgLy99KTtcclxuLy8gICAgfSwgNTAwMCk7XHJcbi8vfSk7IFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
