document.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelector("footer");

  window.addEventListener("scroll", function () {
      // Adjust the value (200) based on how far from the bottom you want the user to be before the footer hides
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
          footer.classList.remove("hidden-footer");
      } else {
          footer.classList.add("hidden-footer");
      }
  });
});
