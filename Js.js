function myFunction() {    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        document.body.style.backgroundColor="black"; 
        document.body.style.color="white";
    } 
    else
    {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
}
