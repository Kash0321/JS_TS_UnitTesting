declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

export class MessageModalDirective {
    public link: ($scope: ng.IScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) => void;
    public restrict = 'E';
    public replace = true;
    public template = require('!raw!./templates/messageModal.html');
    public scope = {};
    public bindToController = {
        messageStatus: '=',
        message: '='
    };
    public controller = MessageModalController;
    controllerAs = 'vm';

    constructor() {
        MessageModalDirective.prototype.link = ($scope: ng.IScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) => {
            $element.attr('id', $attrs['modalId']);
        };
    }

    public static Factory(): any {
        var directive = () => {
            return new MessageModalDirective();
        };

        directive['$inject'] = [];

        return directive;
    }
}

export class MessageModalController {
    public messageStatus: number;
    public message: string;
}