/*
Description of exercise 2

Filter through data inside json file and display filtered searchItem
Visualise data and respond visually to filtering 
*/
let searchItem;
let container = $("#result-container");
let canvas;
let data;

let displayResult = {
  day: undefined,
  description: undefined,
  time: undefined,
  category: undefined,
};

let context;
let filteredResults;
let squares = [];

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

  // draw squares
  for (let i = 0; i < data.activities.length; i++) {
    let squareImg = new Square(canvas.width, canvas.height, context);
    squares.push(squareImg);
  }
  for (let i = 0; i < data.activities.length; i++) {
    squares[i].display();
  }
}

// function to display results
function displayResults(results) {
  data = results;
  // On click get search terms
  $("#searchButton").click(getSearchTerms);

  function getSearchTerms() {
    // deletes text in search bar
    $("#result-container").empty();

    // get value from input field
    searchItem = $("#searchText").val();

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // reset squares
    for (let i = 0; i < squares.length; i++) {
      squares[i].reset();
      squares[i].display();
    }

    // filter results
    filteredResults = data["activities"].filter(function (json) {
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
      // add subtitle
      let searchResult = $("<p>").appendTo(container).addClass("search_result");
      searchResult.text("Things I did on " + searchItem + " : ");

      // display results
      let jsonData = data.activities;

      for (let i = 0; i < filteredResults.length; i++) {
        displayResult.description = $("<p>")
          .appendTo(container)
          .addClass("search_result_description");
        displayResult.description.text(jsonData[i].description);

        displayResult.day = $("<p>")
          .appendTo(container)
          .addClass("search_result_day");
        displayResult.day.text(jsonData[i].day);

        displayResult.time = $("<p>")
          .appendTo(container)
          .addClass("search_result_time");
        displayResult.time.text(jsonData[i].time);

        displayResult.category = $("<p>")
          .appendTo(container)
          .addClass("search_result_category");
        displayResult.category.text("Category: " + jsonData[i].category);

        // modify square appearance
        squares[i].grow();

        // change colour according to category
        if (filteredResults[i].category === "Game") {
          squares[i].displayGreen();
        } else if (filteredResults[i].category === "Food") {
          squares[i].displayBlue();
        } else if (filteredResults[i].category === "Leisure") {
          squares[i].displayYellow();
        } else if (filteredResults[i].category === "Book") {
          squares[i].displayMint();
          // }
        }
      }
    } //fruitful search
  }
}
