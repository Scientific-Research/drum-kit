// wir wollen alle "drum" klassen selektieren.
// Wir brauchen eine Funktion die, die Tastatureingaben abfängt.
// Wir brauchen eine Schleife die, die klick-funktion steuert.
// Wir brauchen einen Eventlistener für unseren keypress.
// Wir brauchen eine Funcktion für die Button-animations und Mausklick.

const drum = document.querySelectorAll(".drum").length;

const myFunction = (key) => {
  switch (key) {
    case "w":
      let crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);
      break;
  }
};

for (let index = 0; index < drum; index++) {
    document
      .querySelectorAll(".drum")
      [index].addEventListener("click", function () {
        let buttonHTML = this.innerHTML;
        myFunction(buttonHTML);
        animation(buttonHTML);
      });
  }

document.addEventListener("keypress", function (event) {
  myFunction(event.key);
  animation(event.key);
});

const animation = (currentKey) => {
  let buttonActivated = document.querySelector("." + currentKey);
  buttonActivated.classList.add("pressed");
  setTimeout(function () {
    buttonActivated.classList.remove("pressed");
  }, 100);
};
