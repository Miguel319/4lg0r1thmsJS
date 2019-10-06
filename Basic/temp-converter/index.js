/*
The algorithm to convert from Celsius to Fahrenheit is 
the temperature in Celsius times 9 / 5, plus 32.
*/

const fahrenheitToCelsius = (fahrenheit) =>  (fahrenheit - 32) * 5/9;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;


console.log(fahrenheitToCelsius(45));
console.log(celsiusToFahrenheit(72));

