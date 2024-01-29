let sMenu = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let head = document.getElementById("MG");

sMenu.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        head.style.height = "120px";
    } else {
        menu.style.display = "block";
        let menuHeight = menu.clientHeight;
        head.style.height = (menuHeight + 140) + "px";
    }
});