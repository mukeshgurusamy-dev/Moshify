/*for collapsible and expanded functionality when user click on icon*/
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/*Actually there is no need to add this navigation-bar code dynamically But*/
/*due to the minification of parcel that removes ul element in <nav> inwhich <nav> is under <header>*/
/*so to solve this we dynamically add this code after DOM loaded*/
/*still i dont know the reason of why parcel htmlminifier removes this ul element eventhough its not empty (or) not used*/

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav.nav");
  if (!nav) return;

  // Create the ul element with nav items
  const ul = document.createElement("ul");
  ul.className = "list nav__list collapsible__content";

  // Create each nav item
  const navItems = [
    { text: "Hosting", href: "#" },
    { text: "VPN", href: "#" },
    { text: "Domain", href: "#" },
    { text: "Pricing", href: "#" },
  ];

  navItems.forEach(({ text, href }) => {
    const li = document.createElement("li");
    li.className = "nav__item";

    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  // Append the ul into the nav
  nav.appendChild(ul);
});
