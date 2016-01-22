var pingPong = function(number) {
  var ping = "ping"
  var numberThree = 3
  var arrayOutput = [];

  for (var i = 1; i <= number; i++) {
    if (i % numberThree === 0) {
    arrayOutput.push("ping");
    } else {
      arrayOutput.push(i);
      }
  }
  return arrayOutput;
};
