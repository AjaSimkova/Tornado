const openButton = document.getElementById("button");
const gallery = document.getElementById("gallery");
const input = document.querySelector(".input_foto");

let change = false;
openButton.addEventListener("click", function () {
  if (!change) {
    gallery.style.display = "block";
    input.style.display = "none";

    change = true;
  } else {
    gallery.style.display = "none";
    input.style.display = "block";
    change = false;
  }
});
