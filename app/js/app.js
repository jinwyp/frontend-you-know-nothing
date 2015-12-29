angular.module('demoApp', ['ngMaterial', 'md.data.table'])

    .config(['$mdThemingProvider', function ($mdThemingProvider) {
        'use strict';

        $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    }])

    .controller('tableController', ['$mdEditDialog', '$q', '$scope', '$timeout', function ($mdEditDialog, $q, $scope, $timeout) {
        'use strict';


        $scope.options = {
            rowSelection: false,
            autoSelect: false,
            boundaryLinks: true,
            largeEditDialog: false,
            pageSelector: false

        };

        $scope.query = {
            order: 'name',
            limit: 500,
            page: 1
        };

        $scope.selected = [];




        $scope.data = {
            "count": 9,
            "textOptions" : [],
            "frameworkData": [
                {
                    "name": "基本功能－DOM操作",
                    "jquery": "吊炸天",
                    "backbone": "无,需要jQuery",
                    "ember": "",
                    "knockout": "",
                    "angular": "抄袭了jQuery",
                    "angular2": "ng1有的都有,没有的也借鉴了react",
                    "vue": "",
                    "avalon": "",
                    "react": "无,我有虚拟DOM"
                },
                {
                    "name": "基本功能－浏览器兼容性",
                    "jquery": "吊炸天",
                    "backbone": "无,需要jQuery",
                    "ember": "",
                    "knockout": "",
                    "angular": "IE8,IE9",
                    "angular2": "IE9",
                    "vue": "",
                    "avalon": "",
                    "react": "IE8"
                },
                {
                    "name": "基本功能－CSS操作",
                    "jquery": "吊炸天",
                    "backbone": "无,需要jQuery",
                    "ember": "",
                    "knockout": "",
                    "angular": "ngClass/ngStyle",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,我有javascript, 喃尼?"
                },
                {
                    "name": "基本功能－Ajax封装",
                    "jquery": "吊炸天",
                    "backbone": "有,但也算是无",
                    "ember": "",
                    "knockout": "",
                    "angular": "吊炸天,$http",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,我用Fetch"
                },
                {
                    "name": "基本功能－事件封装",
                    "jquery": "吊炸天",
                    "backbone": "强大,基于jQuery代理",
                    "ember": "",
                    "knockout": "",
                    "angular": "吊炸天,声明式语法",
                    "angular2": "吊炸天,全新声明式语法",
                    "vue": "",
                    "avalon": "",
                    "react": "有,但不是很好用"
                },
                {
                    "name": "基本功能－表单功能",
                    "jquery": "有,中规中矩,插件无敌",
                    "backbone": "无,需要jQuery",
                    "ember": "",
                    "knockout": "",
                    "angular": "吊炸天,ngForm写多了也想吐",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,还是jQuery思想"
                },
                {
                    "name": "基本功能－内置工具集",
                    "jquery": "该有的都有,例如each什么的",
                    "backbone": "比吊炸天还炸裂,underscore",
                    "ember": "",
                    "knockout": "",
                    "angular": "该有的都有",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,我有javascript,哦不,是ECMAScript"
                },
                {
                    "name": "基本功能－Promise",
                    "jquery": "有,defer不好吗",
                    "backbone": "无,需要jQuery",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,$Q",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,我有ES6 Promise"
                },
                {
                    "name": "基本功能－动画功能",
                    "jquery": "有,很好用,但后来者觉得不好用",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "吊炸天",
                    "angular2": "吊炸天,又一次的再一次全新API",
                    "vue": "",
                    "avalon": "",
                    "react": "无,不要拿这点吐槽我,抄袭angular怎么了"
                }
            ]
        };


        angular.forEach($scope.data.frameworkData, function(value, key) {

            angular.forEach(value, function(text, textKey) {

                if ($scope.data.textOptions.indexOf(text) === -1) {
                    $scope.data.textOptions.push(text);
                }
            })

        });


        $scope.getOptionTypes = function () {
            return $scope.data.textOptions;
        };

        $scope.editComment = function (event, item) {
            event.stopPropagation(); // in case autoselect is enabled

            var editDialog = {
                modelValue: item.comment,
                placeholder: 'Add a comment',
                save: function (input) {
                    if(input.$modelValue === 'Donald Trump') {
                        return $q.reject();
                    }
                    if(input.$modelValue === 'Bernie Sanders') {
                        return item.comment = 'FEEL THE BERN!'
                    }
                    item.comment = input.$modelValue;
                },
                targetEvent: event,
                title: 'Add a comment',
                validators: {
                    'md-maxlength': 30
                }
            };

            var promise;

            if($scope.options.largeEditDialog) {
                promise = $mdEditDialog.large(editDialog);
            } else {
                promise = $mdEditDialog.small(editDialog);
            }

            promise.then(function (ctrl) {
                var input = ctrl.getInput();

                input.$viewChangeListeners.push(function () {
                    input.$setValidity('test', input.$modelValue !== 'test');
                });
            });
        };



        $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {
                // loading
            }, 2000);
        };

        $scope.logItem = function (item) {
            console.log(item.name, 'was selected');
        };

        $scope.logOrder = function (order) {
            console.log('order: ', order);
        };


        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }
    }]);