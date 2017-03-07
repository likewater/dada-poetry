//business logic
function shuffle(array) {
  debugger;
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex]);
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}







//user interface logic
$(document).ready(function() {
  $("form#bananaSplit").submit(function(event) {
    debugger;
    event.preventDefault();
    var input = ("banana1");
    var inputArray = input.split(" ");
    var result = shuffle(inputArray);
    console.log(result);
    // var input = $("input#banana1").val();
    // var inputArray = input.split(" ");
    // var result = inputArray.shuffle();
  });
});
