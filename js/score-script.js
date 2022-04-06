var content = document.getElementById("lists");

function displayScore() {
   var inputs = localStorage.getItem("input");
   console.log(inputs);
   content.appendChild(inputs);
   

}
