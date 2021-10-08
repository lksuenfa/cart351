/**********************
CART351 Exercise 1
Leanne Suen Fa

Description
+ Creates a visual composition with falling squares.
+ Clicking stop squares
+ Try to create the straightest stack of the same colour

I also wanted to replace the squares with falling words from text input and on click they'd stop and change colour to form random sentences

***********************/

let canvas;
let context;

let squares = [];
const NUM_SQUARES = 100;

let wordArray = [];
const NUM_WORDS = 50;

window.onload = function () {
  setUpCanvas();
  addSquare();
  onClick();
  animate();
  setUpTextInput();
};

// function to set up canvas
function setUpCanvas() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // allow canvas resize update
  window.addEventListener("resize", function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

//function add objects from square class
function addSquare() {
  for (let i = 0; i < NUM_SQUARES; i++) {
    let square = new Square(canvas.width, canvas.height, context);
    squares.push(square);
  }
}

//function to make objects interactive
//on click, increase size of squares and stop them
function onClick() {
  // event listener for clicks
  canvas.addEventListener("click", increaseSize);

  function increaseSize() {
    // calculate position of mouse relative to canvas
    let pBox = this.getBoundingClientRect();
    let mouseOffsetX = Math.floor(event.clientX - pBox.x);
    let mouseOffsetY = Math.floor(event.clientY - pBox.y);

    // call checkCollision function
    // if mouse touches square
    for (let i = 0; i < NUM_SQUARES; i++) {
      squares[i].checkCollision(mouseOffsetX, mouseOffsetY);
    }
  }
}

// function to animate squares
function animate() {
  requestAnimationFrame(animate);

  function animate() {
    // repaint with a black rect..
    context.clearRect(0, 0, canvas.width, canvas.height);

    // create squares
    for (let i = 0; i < NUM_SQUARES; i++) {
      squares[i].draw();
      squares[i].move();
    }

    // *******************
    // DOES NOT WORK
    // ERROR MESSAGE:
    // TypeError: Cannot read properties of undefined (reading 'draw')
    //     // add words to canvas and animate them
    //     for (let i = 0; i < NUM_WORDS; i++) {
    //       wordArray[i].draw();
    //       wordArray[i].move();
    //     }

    requestAnimationFrame(animate);
  }
}

// function to add text to canvas
function setUpTextInput() {
  // input text
  document
    .getElementById("inputText")
    .addEventListener("change", readAndHandleTextFile);

  function readAndHandleTextFile() {
    const selectedFileList = this.files;
    const file = selectedFileList[0];

    // if file upload is text only
    if (file.type.startsWith("text/")) {
      const pTag = document.createElement("p");
      const reader = new FileReader();

      //once read
      reader.addEventListener("load", function () {
        // console.log(reader.result);

        // append to the document
        pTag.textContent = reader.result;
        document.getElementsByClassName("wrapper")[0].appendChild(pTag);

        // separate words from text
        let words = reader.result.split(" ");

        // load words from text into wordArray
        for (let i = 0; i < words.length; i++) {
          let wordShape = new UseText(
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
