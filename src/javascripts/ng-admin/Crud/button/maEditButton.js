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
                        entry  = $scope.entry();
                    if (entry) {
                        $location.path('/edit/' + entity.name() + '/' + entry.identifierValue);
                    } else {
                        var search = $location.search().search;
                        $location.path('/edit-batch/' + entity.name());
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
