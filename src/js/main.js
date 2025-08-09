// Handle collapsible toggling
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Import sprite so Parcel tracks it and uses hashed path in production
import spritePath from "../images/sprite.svg";

// Update all <use> elements so they point to the correct hashed file in dist
document.querySelectorAll("use").forEach((icon) => {
  let href = icon.getAttribute("href") || icon.getAttribute("xlink:href");
  if (href && href.includes("sprite.svg")) {
    const id = href.split("#")[1];
    icon.setAttribute("href", `${spritePath}#${id}`);
  }
});
