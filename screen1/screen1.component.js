(function () {

    var app = angular.module('App');

    app.component('screen1', {
        template: '<div> Screen 1 </div>',
        controller: Controller
    });

    function Controller() {
        console.log('Screen 1 activated');
    }

})();
