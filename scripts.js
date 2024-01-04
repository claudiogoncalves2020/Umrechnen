document
  .getElementById("celsius-eingabe")
  .addEventListener("input", celsiusUmrechnen);

document
  .getElementById("fahrenheit-eingabe")
  .addEventListener("input", fahrenheitUmrechenen);

document
  .getElementById("kelvin-eingabe")
  .addEventListener("input", kelvinUrechnen);

function celsiusInFahrenheitumrechnen(celsius) {
  return celsius * 1.8 + 32;
}

function celsiusInKelvinumrechnen(celsius) {
  return celsius * 273.15;
}

function fahrenheitInCelsiumrechnen(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function fahrenheitInKelvinumrechnen(fahrenheit) {
  return (fahrenheit - 32) / 1.8 + 273.15;
}

function kelvinInCelsiusumrechnen(kelvin) {
  return kelvin - 273.15;
}

function kelvinInFahrenheitumrechnen(kelvin) {
  return (kelvin - 273.15) * 1.8 + 32;
}

function celsiusUmrechnen(event) {
  const celsius = event.target.valueAsNumber;
  document.getElementById("fahrenheit-eingabe").value =
    celsiusInFahrenheitumrechnen(celsius);

  document.getElementById("kelvin-eingabe").value =
    celsiusInKelvinumrechnen(celsius);
}

function fahrenheitUmrechenen(event) {
  const fahrenheit = event.target.valueAsNumber;
  document.getElementById("celsius-eingabe").value =
    fahrenheitInCelsiumrechnen(fahrenheit);

  document.getElementById("kelvin-eingabe").value =
    fahrenheitInKelvinumrechnen(fahrenheit);
}

function kelvinUrechnen(event) {
  const kelvin = event.target.valueAsNumber;
  document.getElementById("celsium-eingabe").value =
    kelvinInCelsiusumrechnen(kelvin);

  document.getElementById("fahrenheit-eingabe").value =
    kelvinInFahrenheitumrechnen(kelvin);
}
