function userDetails(){
    const a= document.querySelector('.individualDetails')+ document.getElementById('individualDetails');
    var b=0;
}
function validate(){
    document.getElementById("nameOfUser").innerHTML=document.getElementById('fname').value;
    document.getElementById("emailOfUser").innerHTML="Email:"+ document.getElementById('email').value;
    document.getElementById("mobile").innerHTML="Mobile: +"+document.getElementById('mob').value;
    document.getElementById("landline").innerHTML="Landline:"+document.getElementById('land').value;
    document.getElementById("websiteLink").innerHTML="Website:"+document.getElementById('website').value;
    document.getElementById("addressOfUser").innerHTML="Address:" +document.getElementById('address').value;
    document.getElementById("name").innerHTML=document.getElementById('fname').value;
    document.getElementById("mail").innerHTML="Email:"+ document.getElementById('email').value;
    document.getElementById("number").innerHTML="Mobile: +"+document.getElementById('mob').value;
}
function myFunction() {
    var x = document.getElementById("myform");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

