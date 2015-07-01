var span_list = document.querySelectorAll('span'); // returns NodeList
var span_array = Array.prototype.slice.call(span_list); // converts NodeList to Array

var section_list = document.querySelectorAll('section'); // returns NodeList
var section_array = Array.prototype.slice.call(section_list); // converts NodeList to Array

span_array.forEach(function(myspan) {
	myspan.onclick = function() {
	    disable_spans();
	    myspan.setAttribute ('class','active');
	    var selected_span = this.id;
	    section_array.forEach(function(mysection) {
	    	console.log(mysection, selected_span);
	    	if (mysection.id === selected_span) {
	    		mysection.setAttribute('class', 'visible')
	    	} else {
	    		mysection.setAttribute('class', 'invisible')
	    	}
	    });
	}
});

function disable_spans() {
	span_array.forEach(function(myspan) {
		myspan.setAttribute ('class', 'inactive');
		});
}
