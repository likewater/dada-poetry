//business logic
function cutUp(string, splitType) {
  var array = [];
  var newString = string;
  debugger;
  if (splitType === "sentence") {
    for (var i = 0; i < string.length; i++) {
      var index = string.charAt(i)
      console.log(index);
      if (string.charAt(i) === "." || string.charAt(i) === "!" || string.charAt(i) === "?" || string.charAt(i) === "..." || string.charAt(i) === ":") {
          var newString = newString.replace(index, index + "|");
      }
    }
    array = newString.split("|");
  } else if (splitType === "word") {
    array = string.split(" ");
  }
}
debugger;
console.log(cutUp("This is a string! Its not. But it is?", "sentence"));
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

    //this jumbles intro paragraph
    var instructions = $("#paragraph").html();
    var instructArray = instructions.split(" ");
    console.log(instructions);
    console.log(instructArray);
    var jumbledInstruct = shuffle(instructArray);
    $("#jumbledInstruct").text(jumbledInstruct);
  });

  $("#jumbleButton").click(function() {
    var input = $("#userText").val();
    var wordArray = input.split(" ");
    var wordResult = shuffle(wordArray);
    $("#jumbleResult").text(wordResult);
    $("#jumbledWell").show();
  });

  $("#clearButton").click(function() {
    document.getElementById("userText").value = "";
  });
});
