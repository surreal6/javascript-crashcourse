(function() {

	var data = {}

	document.body.onload = function() {
		// leer el puto json y lanzar la funcion principal con la info
		$.getJSON('data.json', function(json){
			console.log(json.employees.length);
			main(json.employees);
		});
	}


	function main(data) {
		console.log(data.length);
		// codigo dinamico
		for(var i = 0; i < data.length; i++) {
			addSections(i, data);
			addTabs(i, data);
		}
		// interaccion
		addInteraction();
	}

	function addTabs(i, data) { 
		var newTab;
		var newContent;
		var currentDiv; 
		newTab = document.createElement("span"); 
		newContent = document.createTextNode(data[i].firstName); 
		newTab.appendChild(newContent); 
		newTab.setAttribute("data-tab", i+1);
		if (i === 0) {
			newTab.setAttribute("class", "active");
		} else {
			newTab.setAttribute("class", "inactive");
		}
		newLi = document.createElement("li"); 
		newLi.appendChild(newTab);
		// add the newly created element and its content into the DOM 
		document.getElementsByTagName("ul")[0].appendChild(newLi);
	}

	function addSections(i, data) {
		var newSection;
		var newContent;
		var currentDiv; 
	  	newSection = document.createElement("section"); 
  		newContent = document.createTextNode(data[i].lastName); 
  		newSection.appendChild(newContent); //add the text node to the newly created div. 
  		newSection.setAttribute("data-tab", i+1);
  		if (i === 0) {
  			newSection.setAttribute("class", "visible");
  		} else {
  			newSection.setAttribute("class", "invisible");
  		}
  		// add the newly created element and its content into the DOM 
  		currentDiv = document.getElementById("div1"); 
  		document.body.insertBefore(newSection, currentDiv); 
	}

	// interaccion

	function addInteraction() {
		var tabs_list = document.querySelectorAll('span'); // returns NodeList
		var tabs_array = Array.prototype.slice.call(tabs_list); // converts NodeList to Array

		var section_list = document.querySelectorAll('section'); // returns NodeList
		var section_array = Array.prototype.slice.call(section_list); // converts NodeList to Array
		
		tabs_array.forEach(function(myspan) {
			myspan.onclick = function() {
				// disable all tabs
				tabs_array.forEach(function(myspan) {
					myspan.setAttribute ('class', 'inactive');
				});
				//enable current tab
				this.setAttribute ('class','active');

				var selected_span;
				selected_span = this.attributes['data-tab'].value;
				console.log(selected_span);

				// show and hide sections
				section_array.forEach(function(mysection) {
					//console.log(mysection, selected_span);
					if (mysection.attributes['data-tab'].value === selected_span) {
						mysection.setAttribute('class', 'visible')
					} else {
						mysection.setAttribute('class', 'invisible')
					}
				});
			}
		});
	}

})();