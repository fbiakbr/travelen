function swapElementsMobile(first, sec) {
    var first = document.getElementById(first);
    var sec = document.getElementById(sec);
    if (window.innerWidth < 480) {
        first.parentNode.insertBefore(sec, first);
    }
}

swapElementsMobile('first', 'sec');