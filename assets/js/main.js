document.documentElement.classList.add("js-enabled");

const revealItems = document.querySelectorAll(".rv");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in"));
}

document.querySelectorAll(".c").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--y", `${event.clientY - bounds.top}px`);
  });
});

const imageDialog = document.getElementById("d");
const dialogImage = imageDialog.querySelector("img");

document.querySelectorAll("[data-z]").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    imageDialog.showModal();
  });
});

imageDialog.addEventListener("click", () => imageDialog.close());
