// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

$(function () {
  //Get the current hour using Day.js
  var currentHour = dayjs().hour();

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  function updateBlockColors() {
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      //remove classes first to reset the color
      $(this).removeClass("past present future");

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // Update time block colors on page load
  updateBlockColors();

  // Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
  $(".saveBtn").on("click", function() {
    var blockId = $(this).parent().attr("id");
    var userDescription = $(this).siblings(".description").val();

    // Save the user's description in local storage
    localStorage.setItem(blockId, userDescription);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    var savedDescription = localStorage.getItem(blockId);

    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription);
    }
  });

  // TODO: Add code to display the current date in the header of the page
  var currentDate = dayjs().format('MM/DD/YYYY')
  $('#currentDay').text(currentDate);
});
