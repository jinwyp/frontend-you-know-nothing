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
                    "name": "基本功能 － DOM操作",
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
                    "name": "基本功能 － 浏览器兼容性",
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
                    "name": "基本功能 － CSS操作",
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
                    "name": "基本功能 － Ajax封装",
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
                    "name": "基本功能 － 事件封装",
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
                    "name": "基本功能 － 表单功能",
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
                    "name": "基本功能 － 内置工具集",
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
                    "name": "基本功能 － Promise",
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
                    "name": "基本功能 － 动画功能",
                    "jquery": "有,很好用,但后来者觉得不好用",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "吊炸天",
                    "angular2": "吊炸天,又一次的再一次全新API",
                    "vue": "",
                    "avalon": "",
                    "react": "无,不要拿这点吐槽我,抄袭angular怎么了"
                },





                {
                    "name": "时髦功能 － 链式操作",
                    "jquery": "特有功能,凌波微步",
                    "backbone": "无,需要jQuery",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "无",
                    "vue": "",
                    "avalon": "",
                    "react": "无,Reactive算不?"
                },
                {
                    "name": "时髦功能 － 单向绑定",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,underscore模版功能少得可怜",
                    "ember": "",
                    "knockout": "",
                    "angular": "有",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,immutable高大上"
                },
                {
                    "name": "时髦功能 － 双向绑定",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,跟不上时代了",
                    "ember": "",
                    "knockout": "",
                    "angular": "吊炸天",
                    "angular2": "ng1有的都有,全新语法",
                    "vue": "",
                    "avalon": "",
                    "react": "无,觉得不需要"
                },
                {
                    "name": "时髦功能 － 声明式模版语法",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,跟不上时代了",
                    "ember": "",
                    "knockout": "",
                    "angular": "有",
                    "angular2": "ng1有的都有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,JSX多牛X"
                },
                {
                    "name": "时髦功能 － MVC",
                    "jquery": "无,跟不上时代了",
                    "backbone": "有,前端MVC领导者,想当年我的生态圈也是数一数二的",
                    "ember": "",
                    "knockout": "",
                    "angular": "有",
                    "angular2": "无,我是react",
                    "vue": "",
                    "avalon": "",
                    "react": "无,不要落后的东西"
                },
                {
                    "name": "时髦功能 － MVVM",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,但很多插件可以实现,就是不太好用,说不出来为啥",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,其实我是MVW",
                    "angular2": "肯定有",
                    "vue": "",
                    "avalon": "",
                    "react": "无,不要落后的东西"
                },
                {
                    "name": "时髦功能 － SPA",
                    "jquery": "无,有插件pjax,但后人看没什么卵用",
                    "backbone": "有,很好用,是吗?",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,ngRoute都说功能少,newRouter很好用,就是不发布",
                    "angular2": "有,非常强大,但不吊炸天",
                    "vue": "",
                    "avalon": "",
                    "react": "有,全组件化就是好,但就是累人"
                },
                {
                    "name": "时髦功能 － 依赖注入",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,前端需要吗?",
                    "ember": "",
                    "knockout": "",
                    "angular": "有",
                    "angular2": "不清楚",
                    "vue": "",
                    "avalon": "",
                    "react": "无,什么玩意?"
                },
                {
                    "name": "时髦功能 － 调试工具",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,跟不上时代了",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,非常完善,浏览器插件等",
                    "angular2": "有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,非常多,hot reload blow your mind,浏览器插件就不用提了"
                },
                {
                    "name": "时髦功能 － 测试开发工具",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无,跟不上时代了",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,非常多,而且一直在升级,从来未稳定",
                    "angular2": "有,还要搞更多新的工具",
                    "vue": "",
                    "avalon": "",
                    "react": "有,很多,什么你不会用? webpack都不会用?"
                },







                {
                    "name": "次时代功能 － 组件",
                    "jquery": "无,跟不上时代了",
                    "backbone": "有,为什么我发明了组件却让react火了,不用JSX就不是组件了?",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,很多人难理解,觉得没有或不知道233",
                    "angular2": "有,正宗的web component",
                    "vue": "",
                    "avalon": "",
                    "react": "有,JSX才是组件"
                },
                {
                    "name": "次时代功能 － 组件作用域单向传值",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "有",
                    "angular2": "有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,props"
                },
                {
                    "name": "次时代功能 － 组件作用域双向传值",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,我发明的",
                    "angular2": "有,我还要再一次发明",
                    "vue": "",
                    "avalon": "",
                    "react": "无,我不需要,什么有插件可以实现?"
                },
                {
                    "name": "次时代功能 － 组件内部套外部模版",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,transclude吊炸天",
                    "angular2": "好像没了",
                    "vue": "",
                    "avalon": "",
                    "react": "有,children,这和jQuery有区别吗?"
                },
                {
                    "name": "次时代功能 － 服务器段渲染",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "有,react有的我一定要有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,这是我的强项,但用的人很少"
                },
                {
                    "name": "次时代功能 － Webview APP",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,ionic很强大",
                    "angular2": "有,ionic2",
                    "vue": "",
                    "avalon": "",
                    "react": "有"
                },
                {
                    "name": "次时代功能 － Native APP",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "有,react有的我一定要有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,react native 高大上"
                },



                {
                    "name": "超时代功能 － Virtual DOM",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "有,react有的我一定要有,而且性能比React还快",
                    "vue": "",
                    "avalon": "",
                    "react": "有,canvas, WebGL,想换啥换啥"
                },
                {
                    "name": "超时代功能 － 虚拟VR开发",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,支持oculus,都是一家的"
                },
                {
                    "name": "超时代功能 － immutable value",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "不确定,但react有的我一定要有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,我再一次重新发明"
                },
                {
                    "name": "超时代功能 － CSS Module / Scope CSS",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "有",
                    "vue": "",
                    "avalon": "",
                    "react": "有"
                },
                {
                    "name": "超时代功能 － Inline CSS",
                    "jquery": "无,跟不上时代了,这是什么?",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "无",
                    "vue": "",
                    "avalon": "",
                    "react": "有"
                },
                {
                    "name": "超时代功能 － Web worker",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "无",
                    "angular2": "肯定有",
                    "vue": "",
                    "avalon": "",
                    "react": "无"
                },
                {
                    "name": "超时代功能 － 事件订阅与广播 Flux",
                    "jquery": "无,跟不上时代了",
                    "backbone": "无",
                    "ember": "",
                    "knockout": "",
                    "angular": "有,但被认为无",
                    "angular2": "也许有",
                    "vue": "",
                    "avalon": "",
                    "react": "有,redux超乎你想像"
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