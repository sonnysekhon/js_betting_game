var staringAmount = 100;
$("#btn").on("click", function(event) {
    event.preventDefault();
    var userBet = parseInt($("#bet").val());
    var userGuess = parseInt($("#guess").val());
    var returnVal = gameLogic(userBet, userGuess)
    $("#bank").text(returnVal[0]);
    $("#answer").text(returnVal[1]);
});
$("#reset").on("click", function(event) {
    event.preventDefault();
    staringAmount = 100;
    $("#bank").text("100");
    $("#answer").text("");
    $("#bet").val("");
    $("#guess").val("");
});
gameLogic = function(userBet, userGuess){
  var randomNumber = Math.floor((Math.random() * 10) + 1);
  if (userGuess == randomNumber) {
    staringAmount += userBet;
  } else if (userGuess == (randomNumber + 1) || userGuess == (randomNumber - 1)) {
    staringAmount += 0;
  } else {
    staringAmount -= userBet;
  };
  return [staringAmount, randomNumber];
};