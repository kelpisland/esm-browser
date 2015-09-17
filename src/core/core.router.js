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
            .state('proponent.new_project', {
                url: '/new_project/',
                template: '<tmpl-proponent-new-project></tmpl-proponent-new-project>'
            })
            .state('proponent.register', {
                url: '/register/',
                template: '<tmpl-proponent-register></tmpl-proponent-register>'
            });            
         

		$urlRouterProvider.otherwise('/');   
	}
})();
