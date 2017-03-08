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
    var jumbledTitle = shuffle(titleArray);
    $(".jumbledTitle").text(jumbledTitle);


    var instructions = $("#paragraph").html();
    var instructArray = instructions.split(" ");
    var newInstructArray = [];
    console.log(instructions);
    console.log(instructArray);

    instructArray.forEach(function(i) {
      if (i != "<br>↵") {
        newInstructArray.push(i)
        }
      });


    var jumbledInstruct = shuffle(newInstructArray);
    $("#jumbledInstruct").text(jumbledInstruct);
  });

  $("#jumble").click(function(event) {
    //debugger;
    var input = $("#userText").val();
    var wordArray = input.split(" ");
    var wordResult = shuffle(wordArray);
    console.log(wordResult);
  });
});
