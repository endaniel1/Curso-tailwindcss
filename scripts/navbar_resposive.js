const button = document.querySelector("#button");
const menu = document.querySelector("#menu");

button.addEventListener("click",function(){
	console.log("click botton");
	menu.classList.toggle("hidden");
});