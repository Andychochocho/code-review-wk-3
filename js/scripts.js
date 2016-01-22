function pingPong(number) {
  var ping = "<li>ping</li>"
  var pong = "<li>pong</li>"
  var pongPing = "<li>pingpong</li>"
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
      arrayOutput.push('<li>'+i+'</li>');
    }
  }
  return arrayOutput;
  };

$(function() {
  $("form#pingPong").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    var result = pingPong(userInput);
    $('#result').append(result);
    $('#result').show();
    event.preventDefault();
  });
});
