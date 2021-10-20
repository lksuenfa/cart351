/*
Description of exercise 2
*/
let searchItem;
let firstTime = true;
let container = $("#result-container");
let canvas;

const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

window.onload = function () {
  setUpCanvas();
};

$(document).ready(function () {
  // Get search terms
  $("#searchButton").click(getSearchTerms);
  function getSearchTerms() {
    // deletes text in search bar
    $("#result-container").empty();
    // get value from input field
    searchItem = $("#searchText").val();
    console.log("searched for : " + searchItem);

    // function to load JSON
    $.getJSON(
      "assets/data.json",
      displayResults
      // failure to load JSON
    ).fail(function () {
      console.log("error");
    }); //fail
  } //getSearchTerms

  // function to display results
  function displayResults(results) {
    // success
    dataFromJSON = results;
    showTitle(dataFromJSON);
    showDay(dataFromJSON);
    // console.log(dataFromJSON);

    // if (firstTime) {
    //   let firstMessage = $("<p>").appendTo(container);
    //   firstMessage.html("hi");
    //   firstTime = false;
    // }
  } //displayResults
}); //.ready

// function to make title appear
function showTitle(data) {
  let filter = WEEKDAYS.filter(dayEntered);
  console.log(`returned: ${filter}`);

  let scheduleArray = data.Schedule;
  let activities = data.Schedule.Activities;
  let subtitle = $("#subtitle");

  for (let i = 0; i < scheduleArray.length; i++) {
    // let day = $("<p>").appendTo(subtitle).addClass("day");
    // day.text(`*${scheduleArray[i].Day}*`);
    console.log(data.Schedule);
    // console.log(data.Schedule.Day);
    console.log(scheduleArray[i].Day);
  }

  // let title = $("<h1>");
  // $(title).text(data.Description);
  // $(title).appendTo(container);
}

function dayEntered(data) {
  for (let i = 0; i < scheduleArray.length; i++) {
    return searchItem === scheduleArray[i].Day;
  }
}

function showDay(data) {
  $.each(data, function (index, value) {
    let scheduleArray = data.Schedule;

    for (let i = 0; i < scheduleArray.length; i++) {
      let day = $("<p>").appendTo(container).addClass("day");
      day.text(`*${scheduleArray[i].Day}*`);
    }
  });
}

function setUpCanvas() {
  canvas = document.getElementById("testCanvas");
  context = canvas.getContext("2d");

  // canvas size
  canvas.width = window.innerWidth * (3 / 4);
  // canvas.height = window.innerHeight;
  canvas.height = window.innerHeight;

  // allow canvas resize update
  window.addEventListener("resize", function (event) {
    // canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
