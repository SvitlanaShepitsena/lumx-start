angular.module("lumx.dropdown").run(['$templateCache', function(a) { a.put('', '<div class="dropdown" ng-transclude="parent"></div>\n' +
    '');
	a.put('', '<div ng-transclude="1"></div>\n' +
    '');
	a.put('', '<div class="dropdown-menu dropdown-menu--{{ position }}" ng-class="{ \'dropdown__menu--is-dropped\': isDropped }">\n' +
    '    <div class="dropdown-menu__content" ng-transclude="2" ng-if="isDropped"></div>\n' +
    '</div>\n' +
    '');
	 }]);