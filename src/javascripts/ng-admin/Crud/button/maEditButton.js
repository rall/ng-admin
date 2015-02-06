/*global define*/

define(function () {
    'use strict';

    function maEditButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'entry': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoEdit = function () {
                    debugger;
                    var entity = $scope.entity(),
                        entry  = $scope.entry(),
                        path   = '/edit/' + entity.name();
                    if (entry) {
                        $location.path(path + '/' + entry.identifierValue);
                    } else {
                        var search = $location.search().search;
                        $location.path(path);
                        $location.search({ search: search });
                    }
                };
            },
            template:
'<a class="btn btn-default" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoEdit()">' +
    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;Edit' +
'</a>'
        };
    }

    maEditButtonDirective.$inject = ['$location'];

    return maEditButtonDirective;
});
