'use strict';
var mainDashboardMod = angular.module('maindashboardmodule', []);
var myLayoutObj;
mainDashboardMod.controller('maindashController', ['$scope', '$compile', '$rootScope', '$http']).run(function ($compile, $rootScope, $http) {
});


var config = {
    content: [{
        type: 'row',
        content: [
            {
                type: 'component',
                componentName: 'example',
                componentState: {
                    module: 'portfolioActivity',
                    templateId: 'userNameTemplate',
                    //text: 'Component 1'
                }
            },
          {
              type: 'component',
              componentName: 'example',
              componentState: { text: 'Component 2' }
          },
          {
              type: 'component',
              componentName: 'example',
              componentState: { text: 'Component 3' }
          }
        ]
    }]
};

var myLayout = new GoldenLayout(config);

myLayout.registerComponent('example', function (container, state) {
    if (state.text == undefined) {
        var templateHtml = $('#' + state.templateId).html();
        container.getElement().html(templateHtml);
    }
    else {
        container.getElement().html('<h2>' + state.text + '</h2>');
    }
});

myLayout.init();

