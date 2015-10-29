module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});


    // sytem wide widgets
    app.get(api + '/v1/utils/recentActivity', getUtilsRecentActivity);
    app.get(api + '/v1/utils/quickLinks', getUtilsQuickLinks);

    // user
	app.get(api + '/v1/user/:id', getUser);
	app.get(api + '/v1/currentUser', getCurrentUser);
    app.get(api + '/v1/userQuicklinks', getUserQuicklinks);  // CAN BE REMOVED
	app.get(api + '/v1/proponent', getProponent);	
	
	app.get(api + '/v1/responseRevisions/:id', getResponseRevisions);		

	app.get(api + '/v1/item/:id', getItem);		

    // System Alerts
    app.get(api + '/v1/alertNew', getAlertPrim);  
    app.get(api + '/v1/alerts/user', getAlertsUser);
    app.get(api + '/v1/alert/:id', getAlert);

    // Projects
    app.get(api + '/v1/projects', getProjects);

    // Project
    app.get(api + '/v1/project/:id', getProject); // get project by ID
	app.get(api + '/v1/project/:id/buckets', getProjectBuckets); // get project artifacts (buckets)
	app.get(api + '/v1/project/:id/tags', getProjectTags); // CAN BE REMOVED
	app.get(api + '/v1/project/:id/research', getProjectResearch); // research tags, pivot data
	app.get(api + '/v1/project/:id/researchRelated', getProjectRelatedResearch);
	app.get(api + '/v1/project/:id/layers', getProjectLayers);
    app.get(api + '/v1/project/:id/contacts', getProjectContacts);

    // Activities
    app.get(api + '/v1/activities/:id', getProjectActivities);
    app.get(api + '/v1/activity/:id', getProjectActivity);

    // Research View - these can be replaced by the proper project structure
	app.get(api + '/v1/researchFocus', getResearchFocus);
	app.get(api + '/v1/research/:term', getResearchResults);
	app.get(api + '/v1/researchDetail/:seed/:term', getResearchResultDetail);

    // Lookups
	app.get(api + '/v1/roles', getSysRoles);
    app.get(api + '/v1/projectTypes', getSysProjectTypes);
    app.get(api + '/v1/projectPhases', getSysProjectPhases);
    app.get(api + '/v1/projectMilestones', getSysProjectMilestones); 

    // common map layers
    app.get(api + '/v1/layers', getCommonLayers);   

    //
    // system wide widgets
    function getUtilsRecentActivity(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'recentactivity.json');
        res.send(json);
    }
    
    function getUtilsQuickLinks(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'quicklinks.json');
        res.send(json);
    }

    //
    // User
    function getUser(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'proponent.json');
        res.send(json);
    }  

    function getCurrentUser(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'proponent.json');
        res.send(json);
    }  

    function getUserQuicklinks(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'userQuicklinks.json');
        res.send(json);
    }

    function getProponent(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'proponent.json');
        res.send(json);
    }  


    //
    // projects
    function getProjects(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects.json');
        res.send(json);
    }


    //
    // project
    function getProject(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'primProject.json');
        res.send(json);
    }

    function getProjectBuckets(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectBuckets.json'); // should load project.artifacts
        res.send(json);
    }

    function getProjectTags(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectTags.json'); // remove
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
        var json = jsonfileservice.getJsonFromFile(data + 'projectLayers.json');  // project, spatial
        res.send(json);
    }
  
    function getProjectContacts(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projectContacts.json');
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



    function getItem(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'item.json');
        res.send(json);
    }


    //
    // Alerts
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




    //
    // Resereach Project Pivot
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

    //
    // Lookups
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

    //
    // Common Layers
    function getCommonLayers(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'commonLayers.json');
        res.send(json);
    }    


};
