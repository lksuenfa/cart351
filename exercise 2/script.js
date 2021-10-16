/*
Description of exercise 2
*/
let searchItem;
let firstTime = true;
let container = $("#result-container");

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
}); //.ready

// function to display results
function displayResults(results) {
  // if (firstTime) {
  //   let firstMessage = $("<p>").appendTo(container);
  //   firstMessage.html("hi");
  //   firstTime = false;
  // }

  // successfully load JSON
  dataFromJSON = results;
  console.log(dataFromJSON);

  let a = $("<p>").appendTo(container);
  a.html(dataFromJSON.searchItem);
} //displayResults
