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

// Input web app URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYmFYrphIuqXb4OzThDAr3sd5JMFw-swhi0vLuIyiGBNLvb8Byb_BsAEL4o8sa_6p-dA/exec'
const form = document.forms['travelen-form']
const btnSend = document.querySelector('.btn-send')
const btnLoading = document.querySelector('.btn-loading')
const alert = document.querySelector('.alert')

form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.toggle('null')
    btnSend.classList.toggle('null')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnLoading.classList.toggle('null')
            btnSend.classList.toggle('null')
            alert.classList.toggle('null')
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

swapElementsMobile('comp1', 'comp2');