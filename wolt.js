// Knappen - 0 - Green - 1 - White - 2 - Red - 3 - Babyblue
var colors = ["#749850", "white", "red", "#0D96E1"];

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

// Kun text- 0 - Green - 1 - White - 2 - Red - 3 - Babyblue
var colors = ["#749850", "white", "red", "#0D96E1"];

function changeColor1(element, color) {
  element.style.color = color;
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classlist.add("active");
  overlay.classlist.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classlist.remove("active");
  overlay.classlist.remove("active");
}
