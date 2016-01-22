var pingPong = function(number) {
  var ping = "ping"
  var pong = "pong"
  var numberThree = 3
  var numberFive = 5
  var arrayOutput = [];

  for (var i = 1; i <= number; i++) {
    if (i % numberThree === 0 && (i % numberFive === 0)) {
      arrayOutput.push("pingpong");
    } else if (i % numberThree === 0) {
      arrayOutput.push("ping");
    } else if (i % numberFive === 0) {
      arrayOutput.push("pong");
    } else {
      arrayOutput.push(i);
      }
  }
  return arrayOutput;
};
