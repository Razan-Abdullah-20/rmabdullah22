function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let country = document.getElementById("country").value;
let comments = document.getElementById("comments").value;

if(name=="" || email=="" || country=="" || comments==""){
alert("Please fill all fields");
return false;
}

alert("Form submitted successfully!");

return true;
}
