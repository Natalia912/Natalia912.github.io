const submitBtn = document.querySelector(".submit");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const ratingEl = document.querySelector("#rating-el");

const rate1 = document.querySelector("#rate1");
const rate2 = document.querySelector("#rate2");
const rate3 = document.querySelector("#rate3");
const rate4 = document.querySelector("#rate4");
const rate5 = document.querySelector("#rate5");

rate1.addEventListener("click", () => {
  rate1.classList.toggle("clicked");
  ratingEl.textContent = "You selected 1 out of 5";
})

rate2.addEventListener("click", () => {
  rate2.classList.toggle("clicked");
  ratingEl.textContent = "You selected 2 out of 5";
});

rate3.addEventListener("click", () => {
  rate3.classList.toggle("clicked");
  ratingEl.textContent = "You selected 3 out of 5";
});

rate4.addEventListener("click", () => {
  rate4.classList.toggle("clicked");
  ratingEl.textContent = "You selected 4 out of 5";
});

rate5.addEventListener("click", () => {
  rate5.classList.toggle("clicked");
  ratingEl.textContent = "You selected 5 out of 5";
});

submitBtn.addEventListener("click", function(){
  front.style.display = "none";
  back.style.display = "flex";
  back.style.flexDirection = "column";
})
