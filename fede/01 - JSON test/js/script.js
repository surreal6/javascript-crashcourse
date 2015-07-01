
// set the global variable
var data = {};
var index = 0;

// setup the jQuery function to fetch the local json file
$.getJSON('test.json', function(json){
  data = json;
  renderJSON();
});

//Events
$("#json-button").click(function(){
  renderJSON();
});

$("#iteration-button-fordward").click(function(){
  iterateJSONFordward();
});

$("#iteration-button-backward").click(function(){
  iterateJSONBackward();
});

//Function definitions
function renderJSON(){
  $(".json-container").text(data[index].id);
}

function iterateJSONFordward(){
   index ++;
   if(index > data.length-1) {
    index = 0;
   }
  renderJSON(); 
}

function iterateJSONBackward(){
   index --;
   if(index < 0) {
    index = data.length-1;
   }
  renderJSON();
}


