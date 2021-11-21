const GRID = 5; //5x5
const SIZE = 500;
let square;
let open = {};

let getId;

$(document).ready(function () {
  // GET data
  $.ajax({
    url: "linkData.php",
    type: "get", //send it through get method
    data: { getAjaxOnLoad: "fread" }, //parameter (no form data)

    success: function (response) {
      //Do Something
      console.log("responded" + response);
      console.log(JSON.parse(response));

      // change square colour according to database

      // convert JSON to string
      let parsedJSON = JSON.parse(response);

      for (let i = 0; i < parsedJSON.length; i++) {
        console.log(parsedJSON[i]);
        console.log(parsedJSON[i].id);
        let id = parsedJSON[i].id;
        let colour = parsedJSON[i].background;

        let squares = $(".square");
        for (let i = 0; i < squares.length; i++) {
          if (squares[i].id === id && id != "undefined") {
            $(squares[i]).css("background", colour);
            console.log(squares[i].id);
          }
        }

        // square.css("background", colour);

        $(".opened").css("background", colour);
      }
    }, // success
  }); //.ajax

  simulation();
}); //ready

// simulation
function simulation() {
  // create a square grid
  for (let i = 0; i < GRID; i++) {
    for (let j = 0; j < GRID; j++) {
      square = $("<div>")
        .addClass("square")
        .css("background", "brown")
        .attr("id", i * GRID + j)
        .appendTo($("#container"));
      square.width(SIZE / GRID);
      square.height(SIZE / GRID);
    } //i
  } //j

  // on click,
  $(".square").click(function () {
    console.log(this.id);

    let chance = Math.floor(Math.random() * 10);

    // EXPLODES
    // random chance of 20%
    if (chance === 1 || chance === 7) {
      // change colour to blue
      $(this).css("background", "blue");

      let msg = prompt("Boooooommm");

      // DOES NOT EXPLODE
    } else {
      //change colour to red
      $(this).css("background", "orangered");
      $(this).addClass("opened");

      // push data into Open
      open.background = this.style.background;
      open.id = this.id;
    }
    console.log(open);

    postData();
  }); //click
} //simulation

function postData() {
  let formData = new FormData();

  formData.append("background", open.background);
  formData.append("id", open.id);

  $.ajax({
    type: "POST",
    url: "linkData.php",
    processData: false, //prevents from converting into a query string
    contentType: "application/json; charset=utf-8",
    data: formData,
    contentType: false, //contentType is the type of data you're sending,i.e.application/json; charset=utf-8
    cache: false,
    timeout: 600000,

    // if success
    success: function (response) {
      //response is a STRING (not a JavaScript object -> so we need to convert)
      console.log("we had success!");
      console.log(response);
    },

    // if error
    error: function () {
      console.log("error occurred");
    },
  });
}
