
/* massive buttons */
var navbar__toggle = document.querySelector('.navbar__toggle');
var navbar_ml = document.querySelector('.navbar_ml');
var logo___ml = document.querySelector('.logo___ml');
var secondlogo = document.querySelector('.logo_hide_pc');
var secondtext = document.querySelector('.hide_txt_pc');
var button_hide_pc = document.querySelector('.button_hide_pc');

navbar__toggle.addEventListener('click', function(){
    navbar_ml.classList.add('active');
    secondlogo.classList.add('activef');
    secondtext.classList.add('activef');
    button_hide_pc.classList.add('activef');
});

button_hide_pc.addEventListener('click', function(){
    navbar_ml.classList.remove('active');
});
