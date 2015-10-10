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

	app.get(api + '/v1/item/:id', getItem);		

	app.get(api + '/v1/project/:id/buckets', getProjectBuckets);	
	app.get(api + '/v1/project/:id/tags', getProjectTags);	
	app.get(api + '/v1/project/:id/research', getProjectResearch);	
	app.get(api + '/v1/project/:id/researchRelated', getProjectRelatedResearch);	
	app.get(api + '/v1/project/:id/layers', getProjectLayers);
	app.get(api + '/v1/layers', getCommonLayers);

	app.get(api + '/v1/researchFocus', getResearchFocus);

	app.get(api + '/v1/userQuicklinks', getUserQuicklinks);
    
	app.get(api + '/v1/research/:term', getResearchResults);
	app.get(api + '/v1/researchDetail/:seed/:term', getResearchResultDetail);


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

    function getItem(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'item.json');
        res.send(json);
    }

    function getProjectBuckets(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectBuckets.json');
        res.send(json);
    }

    function getProjectTags(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectTags.json');
        res.send(json);
    }

    function getProjectResearch(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectResearch.json');
        res.send(json);
    }    
    
    function getProjectRelatedResearch(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectResearchRelated.json');
        res.send(json);
    }
        
    function getProjectLayers(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectLayers.json');
        res.send(json);
    }
        
    function getCommonLayers(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'commonLayers.json');
        res.send(json);
    }

    function getResearchFocus(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'researchFocus.json');
        res.send(json);
    }

    function getResearchResults(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'researchResults.json');
        res.send(json[req.params.term]);
    }

    function getResearchResultDetail(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'researchResultDetail.json');
        res.send(json);
    }


};
