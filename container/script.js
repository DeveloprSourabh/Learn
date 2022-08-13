let namaste = document.querySelector("button");
namaste.addEventListener('click',inputMsg);


function inputMsg(){
let name = prompt("Enter Your Name?")
   namaste.textContent = "Roll No. 1:" + name;
}
