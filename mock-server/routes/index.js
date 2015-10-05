module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/v1/project/:id', getProject);
    app.get(api + '/v1/projects', getProjects);

    app.get(api + '/v1/projecttypes', getProjectTypes);
    app.get(api + '/v1/projectstages', getProjectStages);

    app.get(api + '/v1/utils/recentactivity', getUtilsRecentActivity);
    app.get(api + '/v1/utils/quicklinks', getUtilsQuickLinks);

    app.get(api + '/v1/activities/:id', getActivities);
	app.get(api + '/v1/activity/:id', getActivity);

	app.get(api + '/v1/user/:id', getUser);
	
	app.get(api + '/v1/currentuser', getCurrentUser);
	
	app.get(api + '/v1/proponent', getProponent);	
	
	app.get(api + '/v1/responseRevisions/:id', getResponseRevisions);		




	app.get(api + '/v1/userQuicklinks', getUserQuicklinks);
    
    function getProject(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'project.json');
        res.send(json);
    }

    function getProjects(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects.json');
        res.send(json);
    }

    function getProjectTypes(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectTypes.json');
        res.send(json);
    }

    function getUtilsRecentActivity(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'recentactivity.json');
        res.send(json);
    }
    
    function getUtilsQuickLinks(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'quicklinks.json');
        res.send(json);
    }    

    function getProponent(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'proponent.json');
        res.send(json);
    }  

    function getUser(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'proponent.json');
        res.send(json);
    }  

    function getCurrentUser(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'proponent.json');
        res.send(json);
    }  

    function getActivities(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'activities.json');
        res.send(json);
    }

    function getActivity(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'activity.json');
        res.send(json);
    }

    function getProjectStages(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectStages.json');
        res.send(json);
    }

    function getResponseRevisions(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'responseRevisions.json');
        res.send(json);
    }

    function getUserQuicklinks(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'userQuicklinks.json');
        res.send(json);
    }

};
