// Swap elements on mobile devices
function swapElementsMobile(comp1, comp2) {
    var comp1 = document.getElementById("comp-1");
    var comp2 = document.getElementById("comp-2");
    if (window.innerWidth < 480) {
        comp1.parentNode.insertBefore(comp2, comp1);
    }
}

// Add active class when clicking on menu item
var container_nav = document.getElementById("container-nav");
var nav = document.getElementsByClassName("nav");
for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
        var active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
}

swapElementsMobile('comp1', 'comp2');