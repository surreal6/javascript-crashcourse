(function() {

	document.body.onload = function() {
		// leer el puto json y lanzar la funcion principal con la info
		$.getJSON('data1.json', function(json){
			main(json.employees);
		});
	}

	var sections;
	sections = ["aaa", "bbb", "ccc"]

	function main(data) {
		console.log(data);
		// codigo dinamico
		for(var i = 0; i < sections.length; i++) {
			addSections(i);
			addTabs(i);
		}
		// interaccion
		addInteraction();
	}

	function addTabs(i) { 
		var newTab;
		var newContent;
		var currentDiv; 
		newTab = document.createElement("span"); 
		newContent = document.createTextNode(sections[i]); 
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

	function addSections(i) {
		var newSection;
		var newContent;
		var currentDiv; 
	  	newSection = document.createElement("section"); 
  		newContent = document.createTextNode(sections[i]); 
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