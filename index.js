AOS.init();

let newContainer = document.getElementsByClassName("newContainer");

let width = window.innerWidth;

if (width > 1200) {
  for (let container in newContainer) {
    newContainer[container].setAttribute("data-aos", "fade-left");
  }
} else {
  for (let container in newContainer) {
    newContainer[container].setAttribute("data-aos", "fade-in");
  }
}
