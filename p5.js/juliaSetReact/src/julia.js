/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

let turn = Math.random() * 50;
const complexPlaneDimensions = 5;

const pixelStep = 0.02;
let convergence;
let colorControl;
let juliaCanvas;
let realPart;
let imaginaryPart;

function squareComplex(a, b) {
  return [a * a - b * b, 2 * a * b];
}

function modulus(a, b) {
  return Math.sqrt(a * a + b * b);
}

function iteration(a, b, zRealPart, zImaginaryPart) {
  let complexIteratorReal = a;
  let complexIteratorImaginary = b;
  for (let i = 0; i < 20; i += 1) {
    [complexIteratorReal, complexIteratorImaginary] = squareComplex(complexIteratorReal, complexIteratorImaginary);
    [complexIteratorReal, complexIteratorImaginary] = [complexIteratorReal + zRealPart, complexIteratorImaginary + zImaginaryPart];
  }
  return modulus(complexIteratorReal, complexIteratorImaginary);
}

export function setup(p5, parentRef) {
  realPart = Math.random();
  imaginaryPart = Math.random();
  juliaCanvas = p5.createCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.9).parent(parentRef);
  p5.background(25, 25, 25);
  colorControl = Math.random() * 50;
}
export function draw(p5) {
  realPart = 0.75 * Math.sin(10 * turn);
  imaginaryPart = 0.75 * Math.cos(7 * turn);

  p5.translate(p5.width / 2, p5.height / 2);
  // p5.background(25, 25, 25);

  p5.strokeWeight(3);

  for (let imaginary = complexPlaneDimensions * 0.5; imaginary > -complexPlaneDimensions * 0.5; imaginary -= pixelStep) {
    for (let i = -complexPlaneDimensions * 0.5; i < complexPlaneDimensions * 0.5; i += pixelStep) {
      convergence = iteration(i, imaginary, realPart, -imaginaryPart);

      if (convergence < 20 && !Number.isNaN(convergence)) {
        p5.stroke(255 * Math.cos(3 * colorControl), 255 * Math.sin(colorControl), 255 * Math.sin(1.5 * colorControl));
        p5.point(200 * i, 200 * imaginary);
      }
      colorControl += 0.0000005;
    }
  }
  p5.fill(25);
  p5.noStroke();
  p5.square(390, -325, 150);

  p5.fill(255);
  p5.strokeWeight(0);
  p5.textSize(15);
  p5.text(`( ${realPart.toFixed(3)}, ${imaginaryPart.toFixed(3)} )`, 400, -300);
  p5.stroke(255, 255, 255);
  p5.strokeWeight(2);
  p5.point(200 * realPart, -200 * imaginaryPart);
  p5.strokeWeight(1);
  p5.line(-p5.width, 0, p5.width, 0);
  p5.line(0, -p5.height, 0, p5.height);

  turn += 0.001;

  // p5.saveCanvas(juliaCanvas, 'myCanvas', 'jpg');
  // if (realImaginaryParts > 1) { p5.noLoop(); }
}
