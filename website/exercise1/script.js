/**********************
CART351 Exercise 1
Leanne Suen Fa

Description
+ Input text creates a visual scene where letters fall down the screen
+ Moving the mouse across scene increases the size of the letters
+ clicking on text changes its colour permanently


ERROR MSG this.setpoints is not a function

***********************/

let canvas;
let context;
let squareTest;

let squares = [];
const NUM_SQUARES = 1000;
let squareSize = 10;

//empty array
// let wordArray = [];
// const NUM_WORDS = 50; //new make a constant

window.onload = function () {
  setUpCanvas();
  // setUpTextInput();
  //
  // squareTest = new Square(canvas.width, canvas.height, context);
  // squareTest.draw();

  for (let i = 0; i < NUM_SQUARES; i++) {
    let square = new Square(squareSize, canvas.width, canvas.height, context);
    squares.push(square);
    // squares.draw();
  }

  canvas.addEventListener("click", increaseSize);

  function increaseSize() {
    squareSize = 50;
  }

  requestAnimationFrame(animate);

  function animate() {
    // repaint with a black rect..
    context.clearRect(0, 0, canvas.width, canvas.height);
    // squareTest.move();

    // for (let i = 0; i < NUM_WORDS; i++) {
    //   wordArray[i].update();
    //   wordArray[i].display();
    // }

    for (let i = 0; i < NUM_SQUARES; i++) {
      squares[i].draw();
      squares[i].move();
    }
    requestAnimationFrame(animate);
  }
};

function setUpCanvas() {
  canvas = document.getElementById("testCanvas");
  context = canvas.getContext("2d");

  // canvas size
  canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  canvas.height = 500;

  // allow canvas resize update
  window.addEventListener("resize", function (event) {
    // canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// function setUpTextInput() {
//   document
//     .getElementById("inputText")
//     .addEventListener("change", readAndHandleTextFile);
//
//   function readAndHandleTextFile() {
//     const selectedFileList = this.files;
//     const file = selectedFileList[0];
//
//     if (file.type.startsWith("text/")) {
//       const pTag = document.createElement("p");
//       const reader = new FileReader();
//
//       //once is read
//       reader.addEventListener("load", function () {
//         console.log(reader.result);
//         pTag.textContent = reader.result;
//
//         // append to the document
//         document.getElementsByClassName("wrapper")[0].appendChild(pTag);
//
//         // separate words from text
//         let words = reader.result.split("\n");
//
//         // load words from text
//         for (let i = 0; i < words.length; i++) {
//           console.log(words[i]);
//           let wordShape = new Shape(
//             words[i],
//             canvas.width,
//             canvas.height,
//             context
//           );
//           wordArray.push(wordShape);
//         }
//       });
//
//       // to read the file as text
//       reader.readAsText(file);
//     }
//   }
// }
