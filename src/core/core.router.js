(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('default', {
                url: '/',
                template: '<tmpl-default></tmpl-default>'
            })
            .state('login', {
                url: '/login',
                template: '<tmpl-login></tmpl-login>'
            })
            .state('register', {
                url: '/register',
                template: '<tmpl-register></tmpl-register>'
            })
            .state('recover', {
                url: '/recover',
                template: '<tmpl-recover></tmpl-recover>'
            })     
			// -----------------------------------------------------------------------------------
			//
			// ROUTES: Public
			//
			// -----------------------------------------------------------------------------------
            .state('public', {
                url: '/public',
               	abstract: true,
               	template: '<div ui-view></div>'
            })
            .state('public.projects', {
                url: '/projects',
                template: '<tmpl-public-projects></tmpl-public-projects>'
            })
            .state('public.project', {
                url: '/project/:id',
                template: '<tmpl-public-project></tmpl-public-project>'
            })
			// -----------------------------------------------------------------------------------
			//
			// ROUTES: Proponent
			//
			// -----------------------------------------------------------------------------------
            .state('proponent', {
                url: '/proponent',
               	abstract: true,
               	template: '<div ui-view></div>'
            })
            .state('proponent.projects', {
                url: '/projects',
                template: '<tmpl-proponent-projects></tmpl-proponent-projects>'
            })
            .state('proponent.project', {
                url: '/project/:id',
                template: '<tmpl-proponent-project></tmpl-proponent-project>'
            })
            .state('proponent.newproject', {
                url: '/newproject/',
                template: '<tmpl-proponent-project-new></tmpl-proponent-project-new>'
            })
            .state('proponent.register', {
                url: '/register/',
                template: '<tmpl-proponent-register></tmpl-proponent-register>'
            })         
            .state('proponent.activity', {
                url: '/activity/:id',
                template: '<tmpl-proponent-activity></tmpl-proponent-activity>'
            })         
			// -----------------------------------------------------------------------------------
			//
			// ROUTES: Proponent
			//
			// -----------------------------------------------------------------------------------
            .state('eao', {
                url: '/eao',
               	abstract: true,
               	template: '<div ui-view></div>'
            })
            .state('eao.projects', {
                url: '/projects',
                template: '<tmpl-eao-projects></tmpl-eao-projects>'
            })
            .state('eao.project', {
                url: '/project/:id',
                template: '<tmpl-eao-project></tmpl-eao-project>'
            });
//             .state('eao.newproject', {
//                 url: '/newproject/',
//                 template: '<tmpl-proponent-project-new></tmpl-proponent-project-new>'
//             })
//             .state('eao.register', {
//                 url: '/register/',
//                 template: '<tmpl-proponent-register></tmpl-proponent-register>'
//             })         
//             .state('eao.activity', {
//                 url: '/activity/:id',
//                 template: '<tmpl-proponent-activity></tmpl-proponent-activity>'
//             });             


		$urlRouterProvider.otherwise('/');   
	}
})();
