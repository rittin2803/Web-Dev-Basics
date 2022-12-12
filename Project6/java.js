$(".dial").click(function () {
    var number = $(this).data('number');
    $("#myInput").val(function() {
        return this.value + number;
    });
});

function calcNumbers(result){

    var x = document.activeElement;
    if (x.id = "Height") {
  
  form.displayResult.value=form.displayResult.value+result;
    }
    if (x.id == "Weight"){
      form.displayResult1.value=form.displayResult1.value+result;
    }
  }