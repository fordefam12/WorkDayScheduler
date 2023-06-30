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
// console.log($('.saveBtn').parent().eq(0).children(0).eq(1).val());
$(function () {
  saveBtn.on("click", function (event) {
    var time = $(this).parent().attr("id");
    // console.log();
    var input = $(event.target).parent().children().eq(1).val();
    
    localStorage.setItem("appointment", JSON.stringify(input));

  });
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    console.log(currentHour);
  });
  function scheduler () {
    var now = moment().format("HH");
    $(".row").each(function () {
      var go = parseInt($(this).attr("id").split("hour")[1]);
      if (go < now){
        $(this).removeClass("presnt");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
          else if (go === now){
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
            else {
            $(this).removeClass("presnt");
            $(this).removeClass("past");
            $(this).addClass("future");
            console.log(now);
            console.log(go);
            localStorage.setItem("appointment", JSON.stringify(scheduler));
      }
    })
  }
  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
      $("#hour-9 .time-block").val(localStorage.getItem("9"));
      $("#hour-10 .time-block").val(localStorage.getItem("10"));
      $("#hour-11 .time-block").val(localStorage.getItem("11"));
      $("#hour-12 .time-block").val(localStorage.getItem("12"));
      $("#hour-13 .time-block").val(localStorage.getItem("13"));
      $("#hour-14 .time-block").val(localStorage.getItem("14"));
      $("#hour-15 .time-block").val(localStorage.getItem("15"));
      $("#hour-16 .time-block").val(localStorage.getItem("16"));
      $("#hour-17 .time-block").val(localStorage.getItem("17"));
      localStorage.setItem("9", JSON.stringify($("#hour-9 .time-block").val));
      localStorage.setItem("10", JSON.stringify($("#hour-10 .time-block").val));
      localStorage.setItem("11", JSON.stringify($("#hour-11 .time-block").val));
      localStorage.setItem("12", JSON.stringify($("#hour-12 .time-block").val));
      localStorage.setItem("9", JSON.stringify($("#hour-1 .time-block").val));
      localStorage.setItem("9", JSON.stringify($("#hour-2 .time-block").val));
      localStorage.setItem("9", JSON.stringify($("#hour-3 .time-block").val));
      localStorage.setItem("9", JSON.stringify($("#hour-4 .time-block").val));
      localStorage.setItem("9", JSON.stringify($("#hour-5 .time-block").val));

  // TODO: Add code to display the current date in the header of the page.
  

  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));
  // console.log(($("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"))));
});
