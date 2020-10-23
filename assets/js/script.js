var progressBar = document.querySelectorAll(".progress-bar");
progressBar.forEach(pgBar => {
    var dataPourcentage = pgBar.getAttribute("aria-valuenow");
    pgBar.style.width = dataPourcentage + "%";
    pgBar.innerHTML = dataPourcentage + "%";
});


// Change la position du border selon le menu cliquerl
var navBtn = document.querySelectorAll(".nav li");
navBtn.forEach(btn => {
    btn.addEventListener('click', event => {
        navBtn.forEach(allbtn => {
            allbtn.classList.remove("active");
        });
        btn.classList.add("active");
    });
});

// Resize de la navbar vertical automatique
var navbar = document.getElementById("navbar-spy");
resizenav();
function resizenav(){
    if (window.innerWidth >= 992) {
        navbar.style.width = (window.innerWidth) / 6 + "px";
    }
    else {
        navbar.style.width = 100 + "%";
    }
}
window.addEventListener("resize", event => {
    resizenav();
});