const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar-item a");

window.addEventListener("scroll", function (e) {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("bg-blue");
    links.forEach((link) => (link.style.color = "#fff"));
  } else {
    navbar.classList.remove("bg-blue");
    links.forEach((link) => {
      link.style.color = "black";
    });
  }
});
