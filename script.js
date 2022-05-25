/***********************************************
   REMOVE COMMENTS BEFORE SUBMITTING YOUR CODE
************************************************/
$(document).ready(function() {
  var intervalId = setInterval(function() {
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    console.log(intervalId);
  }, 1000);
  
  // listen for save button clicks
  function saveDescription() {
      // get nearby values;
      var saveBtn = $(".saveBtn");
      // Store the parent id of the save button clicked to a variable and use it as key to localStorage
      // Hint: parent id is stored in the id attribute of the parent
      var nineAm = $("#nine-am")
    
      // store user input in textarea to a variable
      // Hint: textarea is one of siblings of the clicked button or could be traversed as one of children of the parent of save button
      var userDescription = $(".description").val().trim();
    
      // Save key and value in variables in localStorage
    
      // Optional: Show notification that item was saved to localStorage by adding class 'show'
      // Hint: grab the notification element and add class
    
      // Optional: Timeout to remove 'show' class after 5 seconds
      // Hint: global timeout function that only get invoke once
    
    };
    
    $(".saveBtn").on("click", saveDescription);
    // Alternative way to set up jquery event listener
    // $('.saveBtn').click(doSomethingAboutClickOrSaveButton);
    
    function updateTimeBlockColor() {
      // get current number of hours and store it to a variable
      // Hint: get current hour from moment js
    
      // Loop over time blocks
      // get each time block element and retrieve id attribute
      // retrieve the number from id and convert it into integer
      // store the integer to a variable
      // compare the value of this variable with the current hour
      // add class accordingly based on whether this time block element is in the past, or present
      // Hint: remove previous class values before adding class
    
    }
    
    updateTimeBlockColor();
    
    // set up interval to check if current time needs to be updated
    var interval = setInterval(updateTimeBlockColor, 1000);
});

  
  // load any saved data from localStorage
  // Hint: identify each textarea elements using parent id and its class
  
  // display current day on page using moment js
  
  // Optional: what does $(document).ready(function() {}) do and how can you add it to your code