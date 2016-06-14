define(["require", "exports", './IndexController'], function (require, exports, IndexController_1) {
    "use strict";
    describe("IndexController Tests", function () {
        var httpService;
        var promise;
        beforeEach(function () {
            httpService = jasmine.createSpyObj("httpService", ["get"]);
            inject(function ($q) {
                promise = $q;
            });
        });
        it("Test001", function (done) {
            var deferer = promise.defer();
            deferer.resolve("sd sdjskdsjd");
            httpService.get.and.returnValue(deferer.promise);
            var aa = new IndexController_1.IndexController(httpService);
            //user.then((value) => {
            //    expect(value).toBe("dsds");
            //    done();
            //}, (reason) => {
            //    expect(reason).toBe("");
            //    done();
            //});
        }, 5000);
    });
});
