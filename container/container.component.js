(function () {

    var app = angular.module('App');

    app.component('container', {
        template: `<div>
                        <button ng-click="$ctrl.switch()">Switch Screen</button>
                        <div ng-switch on="$ctrl.screen"> 
                            <screen1 ng-switch-when="0"></screen1>
                            <screen2 ng-switch-when="1"></screen2>
                        </div>
                    </div>`,
        controller: Controller
    });

    function Controller() {
        console.log('Container activated');

        self = this;
        self.screen = 0;

        self.switch = () => {self.screen = (self.screen + 1) % 2}
    }

})();
