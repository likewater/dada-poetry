//business logic
function cutUp(string, splitType) {
  var array = [];
  var newString = string;
  if (splitType === "sentence") {
    for (var i = 0; i < string.length; i++) {
      var index = string.charAt(i)
      if (string.charAt(i) === "." || string.charAt(i) === "!" || string.charAt(i) === "?" || string.charAt(i) === "..." || string.charAt(i) === ":") {
          var newString = newString.replace(index, index + "|");
      }
    }
    return array = newString.split("|");
  } else if (splitType === "word") {
    return array = string.split(" ");
  }
}

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

    $("#instruct").fadeOut();
    $("#replaceWell1").delay(400).fadeIn();
    $("#getStartedExplanation").show();
    $("#userInput").show();
    $("#jumbledInstruct").fadeIn();
    var title1 = ("To Make A Dadist Poem");
    var titleArray = title1.split(" ");
    var jumbledTitle = shuffle(titleArray);
    $(".jumbledTitle").text(jumbledTitle);

    //this jumbles intro paragraph
    var instructions = $("#paragraph").html();
    var instructArray = instructions.split(" ");
    var jumbledInstruct = shuffle(instructArray);

    var spans = '<span>' + jumbledInstruct.split(/\s+/).join(' </span><span>') + '</span>';

    $(spans).hide().appendTo("#jumbledInstruct").each(function(i) {
        $(this).delay(75 * i).fadeIn();
    });
  });

  $("#jumbleButton").click(function() {
    var input = $("#userText").val();
    var type = $("#type").val();

    var newArray = cutUp(input, type);
    var newestString = shuffle(newArray);

    $("#jumbleResult").text(newestString);
    $("#replaceWell1").fadeOut();
    $("#jumbledWell").delay(400).fadeIn();
  });

  $("#clearButton").click(function() {
    document.getElementById("userText").value = "";
  });
});
