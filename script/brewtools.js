function setInitialValues() {
	$(":text[name=grams]")[0].value = "1000.00";
	$(":text[name=grams]").trigger('change');

	$(":text[name=liters]")[0].value = "1.00";
	$(":text[name=liters]").trigger('change');

	$(":text[name=plato]")[0].value = "10.00";
	$(":text[name=plato]").trigger('change');

	$(":text[name=celsius]")[0].value = "65.0";
	$(":text[name=celsius]").trigger('change');

	$(":text[name=measuredsg]")[0].value = "1.050";
	$(":text[name=temperature]")[0].value = "70";
	$(":text[name=caltemperature]")[0].value = "59";
	$(":text[name=measuredsg]").trigger('change');
}

$(document).ready(function(){
	// Handle weight change events
	$(":text[id=weight]").change(function(event){
		var grams = 0;
		var error = false;

		// First store off the value of the one we changed.
		switch(this.name){
		  case "pounds":
		    grams = this.value * 453.59237;
		    break;
		  case "ounces":
		    grams = this.value * 28.3495231;
		    break;
		  case "kilograms":
		    grams = this.value * 1000;
		    break;
		  default:
		    grams = this.value;
		    break;
		}

		error = isNaN(this.value);

		// Walk the other text boxes and do the calculations.
		$(":text[id=weight]").not(event.target).each(function(){
			if (error) {
				this.value = "Enter a number";
			}
			else {
				switch(this.name){
				  case "pounds":
				    this.value = (grams / 453.59237).toFixed(2); 
				    break;
				  case "ounces":
				    this.value = (grams / 28.3495231).toFixed(2); 
				    break;
				  case "kilograms":
				    this.value = (grams / 1000).toFixed(2); 
				    break;
				  default:
				    this.value = grams.toFixed(2); 
				    break;
				}
			}
		});
	});					

	// Handle volume change events
	$(":text[id=volume]").change(function(event){
		var liters = 0;
		var error = false;

		// First store off the value of the one we changed.
		switch(this.name){
		  case "fluidounces":
		    liters = this.value * 0.0295735296;
		    break;
		  case "cups":
		    liters = this.value * 0.236588236;
		    break;
		  case "12oz":
		    liters = this.value * 0.354882355;
		    break;
		  case "pints":
		    liters = this.value * 0.473176473;
		    break;
		  case "22oz":
		    liters = this.value * 0.65061765;
		    break;
		  case "quarts":
		    liters = this.value * 0.946352946;
		    break;
		  case "gallons":
		    liters = this.value * 3.78541178;
		    break;
		  case "barrels":
		    liters = this.value * 117.347765;
		    break;
		  case "impfluidounces":
		    liters = this.value * 0.0284130742;
		    break;
		  case "imppints":
		    liters = this.value * 0.568261485;
		    break;
		  case "impquarts":
		    liters = this.value * 1.13652297;
		    break;
		  case "impgallons":
		    liters = this.value * 4.54609188;
		    break;
		  case "impbarrels":
		    liters = this.value * 163.659308;
		    break;
		  case "milliliters":
		    liters = this.value * 0.001;
		    break;
		  default:
		    liters = this.value;
		    break;
		}

		error = isNaN(this.value);

		// Walk the other text boxes and do the calculations.
		$(":text[id=volume]").not(event.target).each(function(){
			if (error) {
				this.value = "Enter a number";
			}
			else {
				switch(this.name){
				  case "fluidounces":
				    this.value = (liters / 0.0295735296).toFixed(2);
				    break;
				  case "cups":
				    this.value = (liters / 0.236588236).toFixed(2);
				    break;
				  case "12oz":
				    this.value = (liters / 0.354882355).toFixed(2);
				    break;
				  case "pints":
				    this.value = (liters / 0.473176473).toFixed(2);
				    break;
				  case "22oz":
				    this.value = (liters / 0.65061765).toFixed(2);
				    break;
				  case "quarts":
				    this.value = (liters / 0.946352946).toFixed(2);
				    break;
				  case "gallons":
				    this.value = (liters / 3.78541178).toFixed(2);
				    break;
				  case "barrels":
				    this.value = (liters / 117.347765).toFixed(2);
				    break;
				  case "impfluidounces":
				    this.value = (liters / 0.0284130742).toFixed(2);
				    break;
				  case "imppints":
				    this.value = (liters / 0.568261485).toFixed(2);
				    break;
				  case "impquarts":
				    this.value = (liters / 1.13652297).toFixed(2);
				    break;
				  case "impgallons":
				    this.value = (liters / 4.54609188).toFixed(2);
				    break;
				  case "impbarrels":
				    this.value = (liters / 163.659308).toFixed(2);
				    break;
				  case "milliliters":
				    this.value = (liters / 0.001).toFixed(2);
				    break;
				  default:
				    this.value = (liters).toFixed(2);
				    break;
				}
			}
		});
	});					

	// Handle specific gravity change events
	$(":text[id=specificGravity]").change(function(event){
		var plato = 0;
		var error = false;

		// First store off the value of the one we changed.
		switch(this.name){
		  case "sg":
		    plato = -616.868 + 1111.14 * this.value - 630.272 * Math.pow(this.value, 2) + 135.997 * Math.pow(this.value, 3);
		    break;
		  default:
		    plato = this.value;
		    break;
		}

		error = isNaN(this.value);

		// Walk the other text boxes and do the calculations.
		$(":text[id=specificGravity]").not(event.target).each(function(){
			if (error) {
				this.value = "Enter a number";
			}
			else {
				switch(this.name){
				  case "sg":
				    this.value = ( 1 + (plato / (258.6 - 0.8796 * plato))).toFixed(3);
				    break;
				  default:
				    this.value = plato.toFixed(2); 
				    break;
				}
			}
		});
	});					

	// Handle temperature change events
	$(":text[id=temperature]").change(function(event){
		var celsius = 0;
		var error = false;

		// First store off the value of the one we changed.
		switch(this.name){
		  case "fahrenheit":
		    celsius = ((this.value - 32) * 5) / 9;
		    break;
		  default:
		    celsius = this.value;
		    break;
		}

		error = isNaN(this.value);

		// Walk the other text boxes and do the calculations.
		$(":text[id=temperature]").not(event.target).each(function(){
			if (error) {
				this.value = "Enter a number";
			}
			else {
				switch(this.name){
				  case "fahrenheit":
				    this.value = (((celsius * 9) / 5) + 32).toFixed(1);
				    break;
				  default:
				    this.value = celsius.toFixed(1); 
				    break;
				}
			}
		});
	});					

	// Handle hydrometer change events
	$(":text[id=hydrometer]").change(function(event){
		var measuredsg = $(":text[id=hydrometer][name=measuredsg]")[0].value;		
		var temp = $(":text[id=hydrometer][name=temperature]")[0].value;		
		var caltemp = $(":text[id=hydrometer][name=caltemperature]")[0].value;		
		var error = false;

		error = isNaN(measuredsg) || isNaN(temp) || isNaN(caltemp);

		if (error) {
			$(":text[id=hydrometer][name=correctedsg]")[0].value = "Enter a number";
		}
		else {
			var correctedsg = 0;

			correctedsg = measuredsg * ((1.00130346 - 0.000134722124 * temp + 0.00000204052596 * Math.pow(temp, 2) - 
					0.00000000232820948 * Math.pow(temp, 3)) / (1.00130346 - 0.000134722124 * caltemp + 
					0.00000204052596 * Math.pow(caltemp, 2) - 0.00000000232820948 * Math.pow(caltemp, 3)));
			$(":text[id=hydrometer][name=correctedsg]")[0].value = correctedsg.toFixed(3);
		}

	});					
	
	// Have the enter key trigger a change instead of submitting the form
	$("form").submit(function(event){
		$(this).trigger('change');
		event.preventDefault();
	});

	// Have the reset links reset all the forms
	$("a[id=reset]").click(function(event) {
		setInitialValues();
		event.preventDefault();
	});

	setInitialValues();
	$("#tabs").tabs({ fx: {height: 'toggle', opacity: 'toggle', duration: 400} });

});
