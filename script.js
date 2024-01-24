let sMenu = document.getElementById("menu-icon");
let menu = document.getElementById("menu");

sMenu.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block"
    }
});