
let links = document.querySelectorAll(".link");
let toggleButton = document.querySelector("#check");


let length = links.length; 
for ( let i = 0; i < length ; i++ ){
   links[i].addEventListener("click", () => {
      toggleButton.checked = false;
   })
}