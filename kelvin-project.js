// constant variable kelvin set to equal 293

const kelvin = 293;

// convert Kelvin to celsius by subtracting 273 from the kelvin variable

var celsius = kelvin - 273;

// convert celsius to fahrenheit
var fahrenheit = celsius * (9 / 5) + 32;

// round down fahrenheit temp
var fahrenheit = Math.floor(fahrenheit);

//Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
var TEMPERATURE = fahrenheit;
console.log(`The temperature is ${TEMPERATURE} degrees fahrenheit.`);
