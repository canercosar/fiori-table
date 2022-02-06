sap.ui.controller("zzfragment.display", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zzfragment.display
*/
	onInit: function() {
		
		var data = {
				
				universitystudent : []
		};
		
	var student1 = {
			
	Sname : "caner",
	Ssurname: "cosar",
	Sgender:  "Male",
	Sbirthdate:"05.09.1998"
			
	};	
	
	var student2 = {
			
			Sname : "berke",
			Ssurname: "kamadan",
			Sgender:  "Male",
			Sbirthdate:"24.03.1998"
					
			};	
	
	data.universitystudent.push(student1);
	data.universitystudent.push(student2);
	
	var oModel = new sap.ui.model.json.JSONModel(data);
	this.getView().setModel(oModel);
		
	},
	
	handleItemPress : function(oEvent){
		
		var selectedStudent = oEvent.oSource.getSelectedItem().getBindingContext().getObject();
		
		if(!this.showstudentdialog){
			this.showstudentdialog = sap.ui.xmlfragment("zzfragment.showStudentdata",this);
			var oModel = new sap.ui.model.json.JSONModel(selectedStudent);
			this.showstudentdialog.setModel(oModel);
		}
		this.showstudentdialog.getModel().setData(selectedStudent);
		this.showstudentdialog.open();
	},
	
	handlerDialogClose : function(){
		
		this.showstudentdialog.close();
	}
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zzfragment.display
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zzfragment.display
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zzfragment.display
*/
//	onExit: function() {
//
//	}

});