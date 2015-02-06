/*global define*/

define(function () {
    'use strict';

    function maDeleteButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'entry': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoDelete = function () {
                    var entity = $scope.entity(),
                        entry  = $scope.entry();
                    var entryPath = entry ? '/' + entry.identifierValue : '';
                    $location.path('/delete/' + entity.name() + entryPath);
                };
            },
            template:
'<a class="btn btn-default" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoDelete()">' +
    '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>&nbsp;Delete' +
'</a>'

        };
    }

    maDeleteButtonDirective.$inject = ['$location'];

    return maDeleteButtonDirective;
});
