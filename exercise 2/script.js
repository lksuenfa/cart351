/*
Description of exercise 2
*/

$(document).ready(function () {
  // Get search terms
  $("#searchButton").click(getSearchTerms);

  function getSearchTerms() {
    // deletes text in search bar
    $("#result-container").empty();
    // get value from input field
    let searchItem = $("#searchText").val();
    console.log(searchItem);
  }

  // get JSON
  let data = $.getJSON("assets/data.json", function () {
    console.log("data loaded");
  }).fail(function () {
    console.log("error");
  });
});
