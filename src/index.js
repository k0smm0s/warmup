/**
 * Change Celsius temperature to Fahrenheit
 * 
 * @param {number} temperature Temperature in Celsius
 * @return {number} tFahrenheit Temperature in Fahrenheit
 */

module.exports = function warmup(temperature) {
  var tFahrenheit;
  tFahrenheit = (temperature*9)/5+32;
  return tFahrenheit;
};
