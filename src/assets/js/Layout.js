window.onload=function(){
    const burger_button = document.getElementById("burger-button");
    const nav = document.getElementById("navbar-responsiv");
    burger_button.addEventListener('click',function(){
        if (burger_button.dataset.open === "0") {
            document.getElementById('first-span').style.transform = "translateY(12px)"; 
            document.getElementById('third-span').style.transform = "translateY(-12px)";
            nav.style.width = "100vw";
            Array.prototype.forEach.call(document.getElementsByClassName("semi-menu"), function(element) {
                element.style.display = "flex";
                element.style.width = "50%";
            });
            burger_button.dataset.open = "1";
        } else if  (burger_button.dataset.open === "1") {
            document.getElementById('first-span').style.transform = "translateY(0px)"; 
            document.getElementById('third-span').style.transform = "translateY(0px)";
            nav.style.width = "80px";
            burger_button.dataset.open = "0";
            Array.prototype.forEach.call(document.getElementsByClassName("semi-menu"), function(element) {
                element.style.width = "0px";
                element.style.display = "none";
            });
        };
        
    });
    const floating_arrow = document.getElementById('floating-arrow')
    floating_arrow.addEventListener('click',function(){
        floating_arrow.classList += 'paused';
    });
};

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    const nav = document.getElementById("navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // take root var maincolor in  layout.css
        nav.style.background = "black";
    } else {
        nav.style.background = "transparent";
    }
}


function showLanguageModal(){
    
}