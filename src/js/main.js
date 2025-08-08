/*This line tells Parcel to include the SVG file in the final dist folder during build.*/
import "../images/sprite.svg";

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
