angular.module("lumx.file-input").run(['$templateCache', function(a) { a.put('', '<div class="input-file">\n' +
    '    <span class="input-file__label" ng-bind-html="label"></span>\n' +
    '    <span class="input-file__filename"></span>\n' +
    '    <input type="file">\n' +
    '</div>\n' +
    '');
	 }]);