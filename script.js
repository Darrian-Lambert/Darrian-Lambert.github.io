let sMenu = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let menuHeight = menu.clientHeight;
let head = document.getElementById("MG");

sMenu.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        head.style.height = "120px";
    } else {
        menu.style.display = "block";
        head.style.height = (menuHeight + 10) + "px";
    }
});