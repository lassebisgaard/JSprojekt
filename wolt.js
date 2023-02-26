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

function detectSøg() {
  var søg = document.getElementById("søg").value;
  var besked;

  if (søg.toLowerCase() == "Odense") {
    besked = "Du kan vælge imellem Emils hot house, Chicago burger og Mammas";
  } else {
    besked =
      " Der er desværring ingen mad i nærheden af dig";
  }

  alert(besked);
}

const varianter = ["Pizza", "Burger", "Nachos"];
let i, len, text;
for (i = 0, len = varianter.length, text = ""; i < len; i++) {
  text += varianter[i] + "<br>";
}
document.getElementById("nam").innerHTML = text;
