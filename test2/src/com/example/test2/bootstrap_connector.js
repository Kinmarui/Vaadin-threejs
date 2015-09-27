
	window.com_example_test2_MyJavaScriptExtension = function() {
	   
	      this.attach = function(options) {
	   
	          var connectorId = this.getParentId();
	   
	          var element = this.getElement(connectorId);
	   
	          var a = element.childNodes[0];
	          
	         a.rel = "tooltip";
	         a.title = this.getState().display;
	  
	         $(a).tooltip();
	      }
	 }


