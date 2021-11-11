/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// let text = {
//   bodyFont: "Quicksand",
//
//   size: 14,
// };
// // colours
// let aqua = {
//   r: 45,
//   b: 227,
//   g: 240,
// };
//
// let teal = {
//   r: 8,
//   g: 116,
//   b: 123,
// };
//
function setup() {
  createCanvas(windowWidth, windowHeight);
}
//
function draw() {
  background(teal.r, teal.g, teal.b);
  ellipse(mouseX, mouseY, 60);
  push();
  fill(aqua.r, aqua.g, aqua.b);
  textSize(text.size * 4);
  textAlign(CENTER, CENTER);
  textFont(text.bodyFont);
  text("Welcome to Greenhouse hub", windowWidth / 2, windowHeight / 2);
  pop();
}
