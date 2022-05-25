$(document).ready(function() {
    var intervalId = setInterval(function() {
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    console.log(intervalId);
  }, 1000);
  
  // function to save time block descriptions
  function saveDescription() {
      var hr9 = $("#9").val();
      localStorage.setItem("desc9", hr9);

      var hr10 = $("#10").val();
      localStorage.setItem("desc10", hr10);

      var hr11 = $("#11").val();
      localStorage.setItem("desc11", hr11);

      var hr12 = $("#12").val();
      localStorage.setItem("desc12", hr12);

      var hr13 = $("#13").val();
      localStorage.setItem("desc13", hr13);

      var hr14 = $("#14").val();
      localStorage.setItem("des14", hr14);

      var hr15 = $("#15").val();
      localStorage.setItem("desc15", hr15);

      var hr16 = $("#16").val();
      localStorage.setItem("desc16", hr16);

      var hr17 = $("#17").val();
      localStorage.setItem("desc17", hr17);
    };
    //event listener for save button
    $(".saveBtn").on("click", saveDescription);


    // render time block descriptions to corresponding time block
    var hour9Desc = localStorage.getItem("desc9");
    $("#9").val(hour9Desc);

    var hour10Desc = localStorage.getItem("desc10");
    $("#10").val(hour10Desc);

    var hour11Desc = localStorage.getItem("desc11");
    $("#11").val(hour11Desc);

    var hour12Desc = localStorage.getItem("desc12");
    $("#12").val(hour12Desc);

    var hour13Desc = localStorage.getItem("desc13");
    $("#13").val(hour13Desc);

    var hour14Desc = localStorage.getItem("desc14");
    $("#14").val(hour14Desc);

    var hour15Desc = localStorage.getItem("desc15");
    $("#15").val(hour15Desc);

    var hour16Desc = localStorage.getItem("desc16");
    $("#16").val(hour16Desc);

    var hour17Desc = localStorage.getItem("desc17");
    $("#17").val(hour17Desc);
    
    function updateTimeBlockColor() {
     
    
    }
    
    updateTimeBlockColor();
    var interval = setInterval(updateTimeBlockColor, 1000);
});