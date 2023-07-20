function GotoSignIn() {
  window.location.href = "login.html";
  if (window.location.href == "login.html") {
    document.getElementById("sign-in").classList.remove("hidden");
    document.getElementById("sign-up").classList.add("hidden");
  }
}

function GotoSignUp() {
  window.location.href = "login.html#sign-up";
  document.getElementById("sign-in").classList.add("hidden");
  document.getElementById("sign-up").classList.remove("hidden");
}
const closeViewEdit = document.querySelector(".close-viewEdit");
//admin section

function ShowCart() {
  let CartDetails = document.querySelector(".cartDetails");
  CartDetails.addEventListener("click", function () {
    //show the cart details
    //hide the cart Details
  });
}
ShowCart();
//keep the cart Modal staying when the modal is clicked
let hang = document.querySelector(".ModalCart");
hang.addEventListener("click", function () {
  hang.classList.add("show");
});

document.querySelector(".modalcage");
//whne you click anywhere on teh screen the Cart Modal disappears
let bodyOverlay = document.querySelector(".bodyOverlay");
closeViewEdit.addEventListener("click", function () {
  document.querySelector(".modalcage").style.display = "none";
});
