module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});



    app.get(api + '/v1/utils/recentactivity', getUtilsRecentActivity);
    app.get(api + '/v1/utils/quicklinks', getUtilsQuickLinks);

    app.get(api + '/v1/activities/:id', getProjectActivities);
	app.get(api + '/v1/activity/:id', getProjectActivity);

	app.get(api + '/v1/user/:id', getUser);
	
	app.get(api + '/v1/currentuser', getCurrentUser);
	
	app.get(api + '/v1/proponent', getProponent);	
	
	app.get(api + '/v1/responseRevisions/:id', getResponseRevisions);		

	app.get(api + '/v1/item/:id', getItem);		

    app.get(api + '/v1/alerts/user', getAlertsUser);
    app.get(api + '/v1/alert/:id', getAlert);
    app.get(api + '/v1/newAlert', getAlertPrim);      

    app.get(api + '/v1/projects', getProjects);
    app.get(api + '/v1/project/:id', getProject);
	app.get(api + '/v1/project/:id/buckets', getProjectBuckets);	
	app.get(api + '/v1/project/:id/tags', getProjectTags);	
	app.get(api + '/v1/project/:id/research', getProjectResearch);	
	app.get(api + '/v1/project/:id/researchRelated', getProjectRelatedResearch);	
	app.get(api + '/v1/project/:id/layers', getProjectLayers);
    app.get(api + '/v1/project/:id/contacts', getProjectContacts);
	app.get(api + '/v1/layers', getCommonLayers);

	app.get(api + '/v1/researchFocus', getResearchFocus);

	app.get(api + '/v1/userQuicklinks', getUserQuicklinks);
    
	app.get(api + '/v1/research/:term', getResearchResults);
	app.get(api + '/v1/researchDetail/:seed/:term', getResearchResultDetail);

	app.get(api + '/v1/roles', getSysRoles);
    app.get(api + '/v1/projecttypes', getSysProjectTypes);
    app.get(api + '/v1/projectphases', getSysProjectPhases);
    app.get(api + '/v1/projectmilestones', getSysProjectMilestones);    

    function getProject(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'project.json');
        res.send(json);
    }

    function getProjects(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects.json');
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

    function getProjectActivities(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'activities.json');
        res.send(json);
    }

    function getProjectActivity(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'activity.json');
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

    function getAlertsUser(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'alerts.json');
        res.send(json);
    }

    function getAlert(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'alerts.json');
        res.send(json[0]);
    }

    function getAlertPrim(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'primAlert.json');
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
        
    function getProjectContacts(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectContacts.json');
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

    function getSysProjectTypes(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'sysProjectTypes.json');
        res.send(json);
    }

    function getSysProjectPhases(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'sysProjectPhases.json');
        res.send(json);
    }

    function getSysProjectMilestones(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'sysProjectMilestones.json');
        res.send(json);
    }

	function getSysRoles(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'sysRoles.json');
        res.send(json);
    }

    function getSysActivities(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'sysActivities.json');
        res.send(json);
    }


};
