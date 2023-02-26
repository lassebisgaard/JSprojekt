// FREDERIK - Knapperne - 0 - Green - 1 - White - 2 - Red - 3 - Babyblue
var colors = ["#749850", "white", "red", "#0D96E1"];

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

// FREDERIK - Kun text- 0 - Green - 1 - White - 2 - Red - 3 - Babyblue
var colors = ["#749850", "white", "red", "#0D96E1"];

function changeColor1(element, color) {
  element.style.color = color;
}

//David
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

//johannes
function detectMad() {
  var mad = document.getElementById("mad").value;
  var message;

  if (mad.toLowerCase() == "pizza") {
    message = "emils hot house har gode pizzaer";
  } else if (mad.toLowerCase() == "burger") {
    message = "prøv det nye monster fra chicago burger";
  } else if (mad.toLowerCase() == "nachos") {
    message = "book bord på mamas for bedste chip med ost";
  } else {
    message =
      " Prøv Indisk fra mormors thai på vestergade, det er super lækkert!";
  }

  alert(message);
}

const varianter = ["Pizza", "Burger", "Nachos"];
let i, len, text;
for (i = 0, len = varianter.length, text = ""; i < len; i++) {
  text += varianter[i] + "<br>";
}
document.getElementById("nam").innerHTML = text;
