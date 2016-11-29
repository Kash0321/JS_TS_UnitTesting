/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import angular = require('angular');

require('angular-mocks');

import ngMock = require('angular-mocks');

import { FooManagerDirective, FooManagerController, IFooManagerVM } from '../FooManagerDirective';

var $httpMock: ng.IHttpBackendService;

describe("FooManagerController Tests -", () => {

    var $httpBackend, createController;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(($injector) => {
        // Set up the mock http service responses
        $httpMock = $injector.get('$httpBackend');

        // backend definition common for all tests
        let firstId =  $httpMock.when('GET', '/Kash.JSTSUT.Web/api/Foos/undefined/firstId').respond(200, 123);
        let firstFoo = $httpMock.when('GET', '/Kash.JSTSUT.Web/api/Foos/123').respond(200, { Id: 123, Name: 'TestName', Status: 'TestStatus' });

        // Get hold of a scope (i.e. the root scope)
        // $rootScope = $injector.get('$rootScope');

        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController = () => {
            return $controller('FooManagerController', {  });
        };
    }));

    afterEach(() => {
        $httpMock.verifyNoOutstandingExpectation();
        $httpMock.verifyNoOutstandingRequest();
    });

    it("save() [create]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 0;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectPOST('/Kash.JSTSUT.Web/api/Foos', { Name: 'TestName', Status: 'TestStatus' })
            .respond(201, { Id: 123, Name: 'TestName', Status: 'TestStatus' });

        //Act
        controller.save();
        $httpMock.flush();

        //Assert
        expect(controller.Id).toBe(123);
        expect(controller.Name).toBe('TestName');
        expect(controller.Status).toBe('TestStatus');

        expect(controller.messageStatus).toBe('Información del sistema');
        expect(controller.message).toBe('Creado correctamente');

        expect(controller.isNew).toBe(false);
    });

    it("save() [create_error]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 0;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectPOST('/Kash.JSTSUT.Web/api/Foos', { Name: 'TestName', Status: 'TestStatus' })
            .respond(500);

        //Act
        controller.save();
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(500);

        expect(controller.isNew).toBe(true);
        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
    });

    it("save() [update]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = false;

        controller.Id = 111;
        controller.Name = 'TestName111';
        controller.Status = 'TestStatus111';

        $httpMock
            .expectPUT('/Kash.JSTSUT.Web/api/Foos/111', { Name: 'TestName111', Status: 'TestStatus111' })
            .respond(204, {});

        //Act
        controller.save();
        $httpMock.flush();

        //Assert
        expect(controller.Id).toBe(111);
        expect(controller.Name).toBe('TestName111');
        expect(controller.Status).toBe('TestStatus111');

        expect(controller.messageStatus).toBe('Información del sistema');
        expect(controller.message).toBe('Guardado correctamente');

        expect(controller.isNew).toBe(false);
    });

    it("save() [update_notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = false;

        controller.Id = 111;
        controller.Name = 'TestName111';
        controller.Status = 'TestStatus111';

        $httpMock
            .expectPUT('/Kash.JSTSUT.Web/api/Foos/111', { Name: 'TestName111', Status: 'TestStatus111' })
            .respond(404);

        //Act
        controller.save();
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("delete()", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = false;
        controller.Id = 123;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectDELETE('/Kash.JSTSUT.Web/api/Foos/123')
            .respond(201, { Id: 123, Name: 'TestName', Status: 'TestStatus' });

        $httpMock.expectGET('/Kash.JSTSUT.Web/api/Foos/123/previousId').respond(200, 122);
        $httpMock.expectGET('/Kash.JSTSUT.Web/api/Foos/122').respond(200, { Id: 122, Name: 'TestNamePre', Status: 'TestStatusPre' });

        //Act
        controller.delete();
        $httpMock.flush();

        //Assert
        expect(controller.Id).toBe(122);
        expect(controller.Name).toBe('TestNamePre');
        expect(controller.Status).toBe('TestStatusPre');

        expect(controller.messageStatus).toBe('Información del sistema');
        expect(controller.message).toBe('Eliminado correctamente');

        expect(controller.isNew).toBe(false);
    });

    it("delete() [notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = false;
        controller.Id = 123;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectDELETE('/Kash.JSTSUT.Web/api/Foos/123')
            .respond(404);

        //Act
        controller.delete();
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("retrieve() [first]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = undefined;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/undefined/firstId')
            .respond(200, 1);

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/1')
            .respond(200, { Id: 1, Name: '111', Status: '111' });

        //Act
        controller.retrieve('first');
        $httpMock.flush();

        //Assert
        expect(controller.Id).toBe(1);
        expect(controller.Name).toBe('111');
        expect(controller.Status).toBe('111');

        expect(controller.isNew).toBe(false);
    });

    it("retrieve() [first_empty]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = undefined;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/undefined/firstId')
            .respond(404);

        //Act
        controller.retrieve('first');
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("retrieve() [first_getid_notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = undefined;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/undefined/firstId')
            .respond(200, 1);

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/1')
            .respond(404);

        //Act
        controller.retrieve('first');
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("retrieve() [previous]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 10;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/10/previousId')
            .respond(200, 5);


        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/5')
            .respond(200, { Id: 5, Name: '555', Status: '555' });

        //Act
        controller.retrieve('previous');
        $httpMock.flush();

        //Assert
        expect(controller.Id).toBe(5);
        expect(controller.Name).toBe('555');
        expect(controller.Status).toBe('555');

        expect(controller.isNew).toBe(false);
    });

    it("retrieve() [previous_notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 10;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/10/previousId')
            .respond(404);

        //Act
        controller.retrieve('previous');
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("retrieve() [previous_getid_notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 10;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/10/previousId')
            .respond(200, 5);


        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/5')
            .respond(404);

        //Act
        controller.retrieve('previous');
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("retrieve() [next]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 10;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/10/nextId')
            .respond(200, 15);


        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/15')
            .respond(200, { Id: 15, Name: '1555', Status: '1555' });

        //Act
        controller.retrieve('next');
        $httpMock.flush();

        //Assert
        expect(controller.Id).toBe(15);
        expect(controller.Name).toBe('1555');
        expect(controller.Status).toBe('1555');

        expect(controller.isNew).toBe(false);
    });

    it("retrieve() [next_notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 10;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/10/nextId')
            .respond(404);

        //Act
        controller.retrieve('next');
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("retrieve() [next_getid_notfound]", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        controller.isNew = true;

        controller.Id = 10;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/10/nextId')
            .respond(200, 15);


        $httpMock
            .expectGET('/Kash.JSTSUT.Web/api/Foos/15')
            .respond(404);

        //Act
        controller.retrieve('next');
        $httpMock.flush();

        //Assert
        expect(controller.messageStatus).toBe(404);

        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
        expect(controller.isNew).toBe(true);
    });

    it("new()", () => {
        //Arrange
        var controller = createController();

        // Flusheamos las peticiones de construcción del controlador
        $httpMock.flush();

        //Act
        controller.new();

        //Assert
        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
    });
});