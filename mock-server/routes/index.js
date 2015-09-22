module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/v1/project/:id', getProject);
    app.get(api + '/v1/projects', getProjects);

    app.get(api + '/v1/projecttypes', getProjectTypes);

    app.get(api + '/v1/utils/recentactivity', getUtilsRecentActivity);
    app.get(api + '/v1/utils/quicklinks', getUtilsQuickLinks);

    app.get(api + '/v1/activities/:id', getActivities);

	app.get(api + '/v1/user/proponent', getProponent);
    
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

    function getActivities(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'activities.json');
        res.send(json);
    }

};
