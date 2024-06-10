document.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".opacity");
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.style.opacity = "1";
    } else {
      box.style.opacity = "0";
    }
  });
});
