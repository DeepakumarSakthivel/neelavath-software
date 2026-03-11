/* ==============================
   MOBILE HAMBURGER MENU
============================== */

function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("active");
}


/* ==============================
   CONTACT FORM MESSAGE
============================== */

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("formMessage").innerHTML =
"<span style='color:green;font-weight:600;'>Message Sent Successfully ✅</span>";

form.reset();

});

}


/* ==============================
   COUNTER ANIMATION
============================== */

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);
setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});