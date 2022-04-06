var content = document.getElementsByClassName("lists");

function displayScore() {
   var inputs = localStorage.getItem("input");
   content.textContent = inputs.value;


}
