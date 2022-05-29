function swapElementsMobile(comp1, comp2) {
    var comp1 = document.getElementById("comp-1");
    var comp2 = document.getElementById("comp-2");
    if (window.innerWidth < 480) {
        comp1.parentNode.insertBefore(comp2, comp1);
    }
}

swapElementsMobile('comp1', 'comp2');