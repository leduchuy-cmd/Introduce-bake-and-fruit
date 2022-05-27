const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
// console.log(btnsShowModal);

const openModal = function () {
  console.log("Button click");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  //
};
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Modal form
const modal_open = document.querySelector(".modal_open");
const overlay_open = document.querySelector(".overlay_open");
const btnCloseModal_close = document.querySelector(".btn--close-modal");
const btnsOpenModal_open = document.querySelectorAll(".show-modal-open");
//
const openModal_form = function (e) {
  e.preventDefault();
  modal_open.classList.remove("hidden_open");
  overlay_open.classList.remove("hidden_open");
};

const closeModal_form = function () {
  modal_open.classList.add("hidden_open");
  overlay_open.classList.add("hidden_open");
};

btnsOpenModal_open.forEach((btn) =>
  btn.addEventListener("click", openModal_form)
);

btnCloseModal_close.addEventListener("click", closeModal_form);
overlay_open.addEventListener("click", closeModal_form);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal_open.classList.contains("hidden_open")) {
    closeModal_form();
  }
});
