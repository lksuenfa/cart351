/*
Description of exercise 2
*/
let searchItem;
let firstTime = true;
let container = $("#result-container");
let canvas;
let data;

let displayResult = {
  description: undefined,
  time: undefined,
  category: undefined,
};

let context;
let crosses = [];
const NUM_CROSS = 100;

window.onload = function () {
  setUpCanvas();

  requestAnimationFrame(animate);

  function animate() {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < NUM_CROSS; i++) {
      console.log(crosses[i]);
      crosses[i].display();
    }

    requestAnimationFrame(animate);
  }
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

  // draw crosses
  for (let i = 0; i < NUM_CROSS; i++) {
    let cross = new Cross(canvas.width / 2, canvas.height / 2, context);
    crosses.push(cross);
  }
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
        let singleResultContainer = $("<div>");
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
