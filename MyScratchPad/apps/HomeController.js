'use strict';
agGrid.initialiseAgGridWithAngular1(angular);
var mainDashboardMod = angular.module('maindashboardmodule', ["agGrid"]);
var myLayoutObj;
mainDashboardMod.controller('maindashController',function ($scope) {

    console.log('inside');
    var columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
    ];

    var rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowGroupPanelShow: 'always',
        
        enableColResize: true,
        enableSorting: true,
        enableFilter: true,
        suppressRowClickSelection: false,
        suppressCellSelection: true,
        rowSelection: 'multiple',
        rowDeselection: true,
        groupDefaultExpanded: 9999,
        checkboxSelection: false,
        rowHeight: 22,
        sortingOrder: ['desc', 'asc'],
        headerHeight: 55,
        icons: {
            //menu: '<i class="fa fa-bars"/>',
            //columnVisible: '<i class="fa fa-eye"/>',
            //columnHidden: '<i class="fa fa-eye-slash"/>',
            columnRemoveFromGroup: '<i class="fa fa-remove"/>',
            filter: '<i class="fa fa-filter"/>',
            sortAscending: '<i class="fa fa-long-arrow-down"/>',
            sortDescending: '<i class="fa fa-long-arrow-up"/>',
            groupExpanded: '<i class="fa fa-minus-square-o"/>',
            groupContracted: '<i class="fa fa-plus-square-o"/>',
            headerGroupOpened: '<i class="fa fa-minus-square-o"/>',
            headerGroupClosed: '<i class="fa fa-plus-square-o"/>'
        },
        rowData: rowData
    };


});


var config = {
    content: [{
        type: 'row',
        content: [
            {
                type: 'stack',
                componentName: 'example',
                content: [
                             {
                                 type: 'component', title: 'Tradelist', componentName: 'example',
                                 componentState: {                                   
                                     templateId: 'userNameTemplate'
                                 }
                             },
                             {
                                 type: 'component', title: 'Recon', componentName: 'example', componentState: {
                                     templateId: 'aggrid'
                                 }
                             }
                             ],
              
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

