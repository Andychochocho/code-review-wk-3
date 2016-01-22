// Business logic

function pingPong(number) {
  var ping = "ping"
  var pong = "pong"
  var pongPing = "pingpong"
  var numberThree = 3
  var numberFive = 5
  var arrayOutput = [];

  for (var i = 1; i <= number; i++) {
    if (i % numberThree === 0 && i % numberFive === 0) {
      arrayOutput.push(pongPing);
    } else if (i % numberThree === 0) {
      arrayOutput.push(ping);
    } else if (i % numberFive === 0) {
      arrayOutput.push(pong);
    } else {
      arrayOutput.push(i);
    }
  }
  return arrayOutput;
  };

// User-interface logic

$(function() {
  $("form#pingPong").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    var result = pingPong(userInput);
    $('#result').empty();
    $('#result').append(result);
    $('#result').show();
    event.preventDefault();
  });
});
