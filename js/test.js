const{init}=require('./custom.js')
var JsonDefault=[{
	"dashboard_type": "Type 1",
	"dashboard_group": "Test Demo",
	"dashboard_name": "Dashboard 1",
	"dashboard_description": "Test Description",
	"dashboard_id": "1",
	"dashboard_role": "admin, user"
	},
	{
	"dashboard_type": "Type 2",
	"dashboard_group": "Test Demo",
	"dashboard_name": "Dashboard 2",
	"dashboard_description": "Test Description",
	"dashboard_id": "3",
	"dashboard_role": "systemadmin"
	},
	{
	"dashboard_type": "Type 3",
	"dashboard_group": "Page Builder Demo",
	"dashboard_name": "Dashboard 3",
	"dashboard_description": "Test Description",
	"dashboard_id": "3",
	"dashboard_role": "user"
	},
	{
	"dashboard_type": "Type 4",
	"dashboard_group": "Metabase",
	"dashboard_name": "Dashboard 4",
	"dashboard_description": "Test Description",
	"dashboard_id": "4",
	"dashboard_role": "admin"
	}];
    init(JsonDefault)
