const convertToCelsius = function(temp) {
  let newTemp = (temp - 32) * 5/9
  let roundOff = Math.round(newTemp)
  return roundOff
};

const convertToFahrenheit = function(temp) {
  let newTemp = (temp * 1.8) + 32
  let roundOff = Math.round(newTemp)
  return roundOff
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
