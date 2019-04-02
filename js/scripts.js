$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var num1Input = parseFloat($("input#num1").val());
    var num2Input = parseFloat($("input#num2").val());

    for(var i = 0; i <= num1Input; i += num2Input){
      console.log(i);
        $("ol.count").append("<li>" + i + "</li>");
    };






    event.preventDefault();
  });
});
