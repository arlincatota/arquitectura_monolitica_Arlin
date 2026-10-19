const video = document.querySelector(".lesson-video");
const videoError = document.querySelector(".video-error");

if (video && videoError) {
  video.addEventListener("error", () => {
    videoError.hidden = false;
  });
  video.addEventListener("loadedmetadata", () => {
    videoError.hidden = true;
  });
}

const navigation = document.querySelector("#mainNav");
if (navigation && window.bootstrap) {
  navigation.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 991.98px)").matches) {
        window.bootstrap.Collapse.getOrCreateInstance(navigation).hide();
      }
    });
  });
}

const sectionLinks = [...document.querySelectorAll('.navbar-nav .nav-link[href^="#"]')];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sectionLinks.length && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        link.classList.toggle("active", active);
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}
