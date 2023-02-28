// get elements from DOM
const profileImg = document.querySelector(".profile-card img");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const more = document.querySelector(".more");

//add event listener to menu button
menuBtn.addEventListener("click", () => {
  //toggle all dynamic JAvascript classes
  profileImg.classList.toggle("img-expand");
  menuBtn.firstElementChild.classList.toggle("fa-times");
  menuBtn.firstElementChild.classList.toggle("menu-btn-opened");
  overlay.classList.toggle("overlay-opened");
  more.classList.toggle("more-opened");
});
