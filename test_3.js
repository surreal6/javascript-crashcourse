var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

function myFunction() {
    for (i = 0; i < obj.employees.length; i++) { 
		name = "name" + i;
		document.getElementById(name).innerHTML =
		obj.employees[i].firstName + " " + obj.employees[i].lastName;
		}
}

$(document).ready(myFunction);