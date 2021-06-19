
/* massive buttons */
var navbar__toggle = document.querySelector('.navbar__toggle');
var navbar_ml = document.querySelector('.navbar_ml');
var logo___ml = document.querySelector('.logo___ml');


navbar__toggle.addEventListener('click', function(){
    navbar_ml.classList.toggle('active');
});


// hide menu after click on random place
$(document).mouseup(function (e){
    var div = $(".navbar_ml, .navbar__toggle");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
        $('.navbar_ml, .navbar__toggle').removeClass('active');
    }
});
