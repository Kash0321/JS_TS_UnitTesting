import "./modules/application/angular/index";
import "angular";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

angular.module("app", ["app.application"]);
angular.bootstrap(document, ["app"], {
    strictDi: false
    // $HACK: En el proyecto del que he tomado la organizaci�n (https://github.com/brechtbilliet/angular-typescript-webpack), estaba as�
    // pero con esa configuraci�n da error en mi c�digo. Hay que mirar como se puede corregir
    // strictDi: true
});