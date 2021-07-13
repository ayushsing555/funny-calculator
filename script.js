function love(){
var name=document.getElementById("first").value;
var lname=document.getElementById("love").value;
if(name==""){
    alert("please enter your  name ");
}
else if( name.length<=2){
  alert("please enter your  name is greater 3 alphabets ");
}
 else if(!isNaN(name))
   {
    alert("Numbers are not allowed");
   }
  else if(lname==""){
    alert("please enter your love name ");
}
else if( lname.length<=2){
  alert("please enter your love name is greater 3 alphabets ");
}
  
 else if(!isNaN(lname))
   {
    alert("Numbers are not allowed");
   }
   else
   {
       var love=Math.random()*100;
       love=Math.floor(love);
       document.getElementById("answer").value=love +" %";
   }
}
