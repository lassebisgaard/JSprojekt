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
    message = "det har vi ikke, men så er der indisk fra mormors thai på vestergade";
  }

  alert(message);
}


const varianter = ["Pizza", "Burger", "Nachos"];
let i, len, text;
for (i = 0, len = varianter.length, text = ""; i < len; i++) {
  text += varianter[i] + "<br>";
}
document.getElementById("nam").innerHTML = text;