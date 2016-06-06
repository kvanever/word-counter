$(function() {
  $("#word-counter form").submit(function(event) {
    event.preventDefault();
    debugger;
    var userInput = $("input#sentence").val();
    userInput = userInput.toLowerCase();
    var userArray = userInput.split(' ');
    var words = [];
    var counts = [];
      for (var i = 0; i < userArray.length; i++)
        {
          var check = 0;
          for (var j = 0; j < words.length; j++) {
            if (userArray[i] === words[j]) {
              check = 1;
              ++counts[j];
            }
          }
          if (check == 0) {
            words.push(userArray[i]);
            counts.push(1);
          }
          check = 0;
        }
      for (var k = 0; k < words.length; k++) {
        $("ul#word-count-output").append("<li>" + words[k] + ": " + counts[k] + "</li>");
      }
  });
});
