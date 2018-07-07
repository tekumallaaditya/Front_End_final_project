(function(){
    var name = "Jason";
	var newtour = new Tour({
		storage : false
	});
	newtour.addSteps([
	  {
	    element: ".tour-step.tour-step-one",
	    placement: "bottom",      
        title: "Welcome to edureka!",
	    content: "We would like to know your name? <br><input class='form-control' type='text' name='your_name'>",
	    onNext : function(newtour){
	    	var nameProvided = $("input[name=your_name]").val();
	    	if ($.trim(nameProvided) !== ""){
	    		name = nameProvided;
	    	}
	    }
	  }       
        
	]);
    localStorage.clear();

	// Initialize the tour
	newtour.init();
	// Start the tour
	newtour.start();
}());