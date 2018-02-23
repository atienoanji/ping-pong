// Business Logic
var ping-Pong = function(userNumber) {
var inputArray = [];

  for (var i = 1; i<=userNumber; i += 1) {
    if (i % 15 === 0) {
      inputArray.push("ping-pong");
      } else if (i % 5 === 0) {
         inputArray.push("pong");
      } else if (i % 3 === 0) {
         inputArray.push("ping");
      } else {
         inputArray.push(i);
      }
}
  return inputArray;
};
// Front End Logic
  $(document).ready(function() {
    $("form#form-play").submit(function(event) {
     event.preventDefault();

     $("ul.results li").remove();
     var userNumber = parseInt($("#play").val());
     var results = ping-Pong(userNumber);
     results.forEach(function(result) {
       $(".results").append("<li>" + result + "</li>");
     });

     $("#ping-pongresult").show();

});
});
