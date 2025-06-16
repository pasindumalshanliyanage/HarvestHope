// starRating.js

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");

  function clearSelection() {
    stars.forEach((star) => star.classList.remove("selected"));
  }

  function setSelection(value) {
    clearSelection();
    stars.forEach((star) => {
      if (parseInt(star.dataset.value) <= value) {
        star.classList.add("selected");
      }
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const value = parseInt(star.getAttribute("data-value"));
      ratingInput.value = value;
      setSelection(value);
    });

    star.addEventListener("mouseover", () => {
      const value = parseInt(star.getAttribute("data-value"));
      stars.forEach((s) => {
        s.classList.remove("hover");
        if (parseInt(s.dataset.value) <= value) {
          s.classList.add("hover");
        }
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s) => s.classList.remove("hover"));
    });
  });
});
