// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hour5 = $("#hour-5");
var saveBtn = $(`.saveBtn`);
var description = $(`.description`);
var btn = $(".row");

// console.log($('.saveBtn').parent().eq(0).children(0).eq(1).val());
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing description as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// description containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

$(function () {
  saveBtn.on("click", function (event) {
    var time = $(this).parent().attr("id").split("-")[1];

    // console.log();
    var input = $(event.target).parent().children().eq(1).val();

    console.log(btn.val());

    event.preventDefault();
    var hour = event.target;
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });
  // TODO: Add code to apply the past, present, or future class to each timedescription by comparing the id to the current hour. HINTS: How can the id
  // attribute of each description be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function scheduler() {
    var now = parseInt(today.format("H"));
    // console.log(typeof now);
    $(".row").each(function () {
      // console.log(this);
      var go = parseInt($(this).attr("id").split("-")[1]);

      if (now > go) {
        $(this).addClass("past");
      } else if (now === go) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }

      // console.log(typeof go);
      // localStorage.setItem("appointment", JSON.stringify(scheduler));
      // console.log(now);
      // console.log(go);
    });
  }
  scheduler();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set

  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
 
  // TODO: Add code to display the current date in the header of the page.

  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss "));
  $(this).addClass("hour-12").innerHtml;
  // console.log(($("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss "))));
});
