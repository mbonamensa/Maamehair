
function signUp() {
alert("Sign up successful. Thank you!");
}

function bookConsultation() {
document.getElementById('form-container').style.display="block";
}

function closeConsultation() {
document.getElementById('form-container').style.display="none";
}

function homeService() {
prompt("Where and when would you like your Home Service?");
}
function salonSpa() {
alert("Thank you for your interest! Our Salon & Spa are coming soon!");
}

function bookHomeService() {
var book = document.getElementById('form2-container').style.display="block";
}

function closeHomeService() {
var close = document.getElementById('form2-container').style.display="none";
}

function openMenu() { 
document.getElementById('modal').style.display = "block";	
}

function closeMenu() { 
document.getElementById('modal').style.display = "none";	
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none"
}
}

/*var x = window.matchMedia("(min-width: 600px)")
myFunction(x) 
x.addListener(myFunction)

function myFunction(x) {
if (x.matches) { 
document.getElementById('modal').style.display = "none";	
}
}*/


const accordion = document.querySelector('.accordion');
const list      = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');


function toggleAccordion() {
const thisList = this.parentNode;

list.forEach(list => {
if (thisList == list) {
thisList.classList.toggle('open');
return;
}

list.classList.remove('open');
})


//console.log(this.parentNode);
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));


































