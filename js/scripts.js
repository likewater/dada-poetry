//business logic
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array.join(" ");
}







//user interface logic
$(document).ready(function() {

  $("#getStartedButton").click(function() {
    $("#instruct").hide();
    $("#replaceWell1").show();
    $("#getStartedExplanation").show();
    $("#userInput").show();

    var title1 = ("To Make A Dadist Poem");
    var titleArray = title1.split(" ");
    var jumbledArray = shuffle(titleArray);
    $(".jumbledTitle").text(jumbledArray);

    var instructions = document.getElementById("paragraph").select();
    console.log(instructions);
  });

  $("#jumble").click(function(event) {
    debugger;
    var input = $("#userText").val();
    var wordArray = input.split(" ");
    var wordResult = shuffle(wordArray);
    console.log(wordResult);
  });
});
