var countUp = function(high_end, multiple) {

  var answer = [];

  var first_number = multiple;
  if (high_end < first_number) {
    return "error";
  } else if (high_end >= first_number) {
    answer.push(first_number);
    while (answer[answer.length-1] < high_end) {
      answer.push((answer[answer.length-1])+parseInt(multiple));
    }
  }
  return answer.join();
};



$(document).ready(function() {
  $("form#countnumbers").submit(function(event) {
    var high_end = parseInt($("input#high_end").val());
    var multiple = parseInt($("input#multiple").val());
    var result = countUp(high_end, multiple);

    if (result) {
      $(".count").text(result)
    }

    $("#result").show();

    event.preventDefault();
  });
});
