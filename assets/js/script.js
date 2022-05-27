$(document).ready(function() {
    // get current hour
    var currentHour = moment().format("h");
    // gets current time and day for jumbotron
    var intervalId = setInterval(function() {
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    console.log(intervalId);
  }, 1000);
  
  // function to save time block descriptions
  function saveDescription(event) {
    event.preventDefault();

    var timeBlockVal = $(this).siblings(".timeBlock").val();
    var hour = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(hour, timeBlockVal);
    console.log(timeBlockVal);
    console.log(hour);
    };
    
    // gets data from local storage and renders them to corresponding time block
    $("#hour-9 .timeBlock").val(localStorage.getItem("9"));
    $("#hour-10 .timeBlock").val(localStorage.getItem("10"));
    $("#hour-11 .timeBlock").val(localStorage.getItem("11"));
    $("#hour-12 .timeBlock").val(localStorage.getItem("12"));
    $("#hour-13 .timeBlock").val(localStorage.getItem("13"));
    $("#hour-14 .timeBlock").val(localStorage.getItem("14"));
    $("#hour-15 .timeBlock").val(localStorage.getItem("15"));
    $("#hour-16 .timeBlock").val(localStorage.getItem("16"));
    $("#hour-17 .timeBlock").val(localStorage.getItem("17"));

    // update time block color for each element with class time-block
    $(".time-block").each(function updateTimeBlockColor() {
      var timeRow = $(this).attr("id").split("-")[1];

      if (currentHour === timeRow) {
        $(this).addClass("present");
      } else if (currentHour < timeRow) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeRow) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
    

    // event listener for save button
    $(".saveBtn").on("click", saveDescription);

    // function to update time block color
    updateTimeBlockColor();
});