export declare class IndexController {
    private $http;
    static $inject: string[];
    Name: string;
    Status: string;
    constructor($http: ng.IHttpService);
    Save(): void;
    FillDataForTests(): void;
}
