 function checkVal()
 {
   
 
  var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
   var email = document.getElementById("email").value;
     var mileage = document.getElementById("mileage").value; 
      var mileage_plan = document.getElementById("mileage_plan").value; 
    if (fname == "") {
        document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please input  First Name..!!</font></h5>";
        return false;
    } 
     if (lname == "") {
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Last Name..!!</font></h5>";
        return false;
    } 
    if (email == "") {
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Email..!!</font></h5>";
        return false;
    } 
     if (mileage_plan == "") {
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Mileage Plans..!!</font></h5>";
        return false;
    } 



    /*else if ("" == b) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Age..!!</font></h5>";
        return false;

    }
    if ("" == c) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Department..!!</font></h5>";

        return false;
    } else if ("" == d) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Designation..!!</font></h5>";
        return false;
    } else if (isNaN(b) || b <= 0) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Invalid Age..!!</font></h5>";

        return false;
    } */
}