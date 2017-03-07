//business logic
function shuffle(array) {
  debugger;
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
  $("#jumble").click(function(event) {
    debugger;
    event.preventDefault();
    var input = ("#userText");
    var wordArray = input.split(" ");
    var wordResult = shuffle(wordArray);
    console.log(result);
  });
});
