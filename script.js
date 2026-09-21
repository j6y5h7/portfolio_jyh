const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const sections = document.querySelectorAll("section[id]");
const navAnchors = navLinks.querySelectorAll("a");

function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "메뉴 열기");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);

  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });

  navAnchors.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", isActive);
  });
});
