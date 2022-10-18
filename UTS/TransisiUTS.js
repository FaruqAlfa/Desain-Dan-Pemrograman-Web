const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function(e){
    console.log(window.scrollY);
    if (this.scrollY > 100) {
        navbar.classList.add("bg-blue")
        navbar.classList.remove("bg-transparent")
    } else {
        navbar.classList.remove("bg-blue")
    
    }
});