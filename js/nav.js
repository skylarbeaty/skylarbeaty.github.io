function toggleHamburger(){
    const menu = document.querySelector(".mobile-links");
    const burger = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    burger.classList.toggle("open");
}