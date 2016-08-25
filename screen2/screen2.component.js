(function () {

    var app = angular.module('App');

    app.component('screen2', {
        template: '<div> Screen 2 </div>',
        controller: Controller
    });

    function Controller() {
        console.log('Screen 2 activated');
    }

})();
