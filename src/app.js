/* eslint-disable */
//import "bootstrap";
//import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the card"];
  let when = [
    "before the class",
    "right on time",
    "when i finished",
    "during my lunch",
    "while I was praying"
  ];

  function generadorPalabra(arreglo) {
    var tamaño = arreglo.length - 1;
    var posicion = Math.floor(Math.random() * tamaño);
    var palabra = arreglo[posicion];
    return palabra;
  }

  function generadorDeExcusas(arr1, arr2, arr3, arr4) {
    var quien = generadorPalabra(arr1);
    var accion = generadorPalabra(arr2);
    var que = generadorPalabra(arr3);
    var cuando = generadorPalabra(arr4);
    return quien + " " + accion + " " + que + " " + cuando;
  }

  var excusa = generadorDeExcusas(who, action, what, when);
  document.getElementById("excuse").innerHTML = excusa;
};


