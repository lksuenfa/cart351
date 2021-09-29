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

let squares = [];
const NUM_SQUARES = 1000;
let squareSize = 10;

let wordArray = [];
const NUM_WORDS = 50; //new make a constant

window.onload = function () {
  setUpCanvas();
  setUpTextInput();

  for (let i = 0; i < NUM_SQUARES; i++) {
    let square = new Square(canvas.width, canvas.height, context);
    squares.push(square);
  }

  canvas.addEventListener("click", increaseSize);

  function increaseSize() {
    let pBox = this.getBoundingClientRect();

    let mouseOffsetX = Math.floor(event.clientX - pBox.x);
    let mouseOffsetY = Math.floor(event.clientY - pBox.y);

    for (let i = 0; i < NUM_SQUARES; i++) {
      squares[i].checkCollision(mouseOffsetX, mouseOffsetY);
    }
  }

  requestAnimationFrame(animate);

  function animate() {
    // repaint with a black rect..
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < NUM_WORDS; i++) {
      wordArray[i].draw();
      wordArray[i].move();
    }

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

function setUpTextInput() {
  document
    .getElementById("inputText")
    .addEventListener("change", readAndHandleTextFile);

  function readAndHandleTextFile() {
    const selectedFileList = this.files;
    const file = selectedFileList[0];

    if (file.type.startsWith("text/")) {
      const pTag = document.createElement("p");
      const reader = new FileReader();

      //once is read
      reader.addEventListener("load", function () {
        // console.log(reader.result);
        pTag.textContent = reader.result;
        // append to the document
        document.getElementsByClassName("wrapper")[0].appendChild(pTag);

        // separate words from text
        let words = reader.result.split(" ");

        // load words from text
        for (let i = 0; i < words.length; i++) {
          let wordShape = new Shape(
            words,
            canvas.width,
            canvas.height,
            context
          );
          wordArray.push(wordShape);
        }
      });

      // to read the file as text
      reader.readAsText(file);
    }
  }
}
