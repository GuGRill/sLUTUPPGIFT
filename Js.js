function myFunction() {    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        document.body.style.backgroundColor="rgb(39, 39, 39)"; 
        document.body.style.color="white";        

    } 
    else
    {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    save();
}
function save() {
    var checkbox = document.getElementById("myCheck");
    localStorage.setItem("myCheck", checkbox.checked);
}
var checked = JSON.parse(localStorage.getItem("myCheck"));
document.getElementById("myCheck").checked = checked;
