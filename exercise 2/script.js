/*
Description of exercise 2
*/
let searchItem;
let firstTime = true;
let container = $("#result-container");
let canvas;
let data;
let activities;
let displayResult = {
  description: undefined,
  time: undefined,
  category: undefined,
};

window.onload = function () {
  setUpCanvas();
};

$(document).ready(function () {
  // function to load JSON
  $.getJSON(
    // success
    "assets/data.json",
    displayResults
    // failure to load JSON
  ).fail(function () {
    console.log("error");
  }); //fail
});

// function to set up canvas
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

// function to display results
function displayResults(results) {
  data = results;
  searchAndFilter();
  // success
}

// function to search and filter results
function searchAndFilter() {
  // Get search terms
  $("#searchButton").click(getSearchTerms);
  function getSearchTerms() {
    // deletes text in search bar
    $("#result-container").empty();
    // get value from input field
    searchItem = $("#searchText").val();

    // filter
    let filteredResults = data["activities"].filter(function (json) {
      return json.day === searchItem;
    });

    // if search is not fruitful
    if (filteredResults.length === 0) {
      // display error message
      let searchResult = $("<p>").appendTo(container).addClass("search_result");
      searchResult.text("Sorry we did not find anything");
    }
    //if search is fruitful
    else {
      let searchResult = $("<p>").appendTo(container).addClass("search_result");
      searchResult.text("Things I did on " + searchItem + " : ");

      // display results
      let jsonData = data.activities;
      for (let i = 0; i < filteredResults.length; i++) {
        displayResult.description = $("<p>")
          .appendTo(container)
          .addClass("search_result_description");
        displayResult.description.text(jsonData[i].description);

        displayResult.time = $("<p>")
          .appendTo(container)
          .addClass("search_result_time");
        displayResult.time.text(jsonData[i].time);

        displayResult.category = $("<p>")
          .appendTo(container)
          .addClass("search_result_category");
        displayResult.category.text(jsonData[i].category);
      }
    }
  } //getSearchTerms
}

// // function to make title appear
// function showTitle(data) {
//   let jsonData = data.activities;
//   let scheduleArray = data.activities;
//   let subtitle = $("#subtitle");
//
//   for (let i = 0; i < jsonData.length; i++) {
//     let day = $("<p>").appendTo(subtitle).addClass("day");
//     day.text(`*${jsonData[i].day}*`);
//     // console.log(scheduleArray[i].description);
//   }
// }

// showTitle(data);
// // showDay(data);
// console.log(data);
// console.log(data.activities.length);
// let days = data.activities;
// for (let i = 0; i < days.length; i++) {
//   console.log(days[i].day);
//
//   if (days[i].day === "sunday") {
//     console.log(days[i].activityID);
//   }
// }
