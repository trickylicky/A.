function myFinal(){
    event.preventDefault();
    let newName = document.getElementById("name").value;
    let newDate = document.getElementById("date").value;
    let newLocation = document.getElementById("place").value;
    let newAddition =document.getElementById("more").value;
   document.getElementById("demo").innerHTML=`This is what was submitted <br> Name : ${newName} <br>  Location : ${newLocation} <br> Date born : ${newDate} <br>Added info : ${newAddition} ` ; 
}
let newHere = document.getElementById("name").value ;