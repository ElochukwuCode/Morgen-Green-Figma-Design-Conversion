let changespan = document.querySelectorAll(".text_change span");

let count = 0;

console.log(changespan);
setInterval(() => {
  setTimeout(() => {
    count++;
  }, 2000);
  if (count > 2) {
    count = 0;
  }
  if (count == 0) {
    for (let i = 0; i < changespan.length; i++) {
      changespan[i].style.transform = "translateY(0)";
    }
  }
  if (count == 1) {
    for (let i = 0; i < changespan.length; i++) {
      changespan[i].style.transform = "translateY(-115%)";
    }
  } else if (count == 2) {
    for (let i = 0; i < changespan.length; i++) {
      changespan[i].style.transform = "translateY(-233%)";
    }
  }
}, 1000);

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
