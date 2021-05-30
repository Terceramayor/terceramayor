/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

let turn = Math.random() * 50;
const complexPlaneDimensions = 5;
let imaginary;
const zRealConstant = 0;
const zImaginaryConstant = 0;
let timer;

function subeWireFrame(p5, planeDimension) {
  let zCoordenate;
  let yCoordenate;
  const leftCoordenate = -planeDimension * 0.5;
  const rightCoordenate = planeDimension * 0.5;

  for (let i = 0; i < 2; i += 1) {
    if (i === 0) {
      zCoordenate = rightCoordenate;
    } else {
      zCoordenate = leftCoordenate;
    }

    p5.line(rightCoordenate,
      rightCoordenate,
      zCoordenate,
      leftCoordenate,
      rightCoordenate,
      zCoordenate);

    p5.line(rightCoordenate,
      rightCoordenate,
      zCoordenate,
      rightCoordenate,
      leftCoordenate,
      zCoordenate);

    p5.line(leftCoordenate,
      leftCoordenate,
      zCoordenate,
      leftCoordenate,
      rightCoordenate,
      zCoordenate);

    p5.line(leftCoordenate,
      leftCoordenate,
      zCoordenate,
      rightCoordenate,
      leftCoordenate,
      zCoordenate);
  }

  for (let i = 0; i < 2; i += 1) {
    if (i === 0) {
      yCoordenate = rightCoordenate;
    } else {
      yCoordenate = leftCoordenate;
    }

    p5.line(rightCoordenate,
      yCoordenate,
      rightCoordenate,
      rightCoordenate,
      yCoordenate,
      leftCoordenate);

    p5.line(leftCoordenate,
      yCoordenate,
      rightCoordenate,
      leftCoordenate,
      yCoordenate,
      leftCoordenate);
  }
}

function squareComplex(a, b) {
  return [a * a - b * b, 2 * a * b];
}

function modulus(a, b) {
  return Math.sqrt(a * a + b * b);
}

function iteration(a, b, zRealPart, zImaginaryPart) {
  let complexIteratorReal = zRealPart;
  let complexIteratorImaginary = zImaginaryPart;
  for (let i = 0; i < 100; i += 1) {
    [complexIteratorReal, complexIteratorImaginary] = squareComplex(complexIteratorReal, complexIteratorImaginary);
    [complexIteratorReal, complexIteratorImaginary] = [complexIteratorReal + a, complexIteratorImaginary + b];
  }
  return modulus(complexIteratorReal, complexIteratorImaginary);
}

export function setup(p5, parentRef) {
  p5.createCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.9, p5.WEBGL).parent(parentRef);
  p5.perspective(Math.PI / 6, p5.width / p5.height, 0.001, 100);
  p5.camera(0, 0, 10, 0, 0, 0, 0, -1, 0);
  p5.pointLight(255, 255, 255, complexPlaneDimensions, 0, complexPlaneDimensions);

  imaginary = complexPlaneDimensions * 0.5;

  timer = p5.millis();
}
export function draw(p5) {
  p5.rotateX(0.75);
  p5.rotateY(1.25);
  // p5.rotateZ(2);

  for (let i = -complexPlaneDimensions * 0.5; i < complexPlaneDimensions * 0.5; i += 0.01) {
    if (iteration(i, imaginary, zRealConstant, zImaginaryConstant) > 10 || Number.isNaN(iteration(i, imaginary, zRealConstant, zImaginaryConstant))) {
      p5.stroke(100, 0, 200);
      p5.point(i, 0, imaginary);
    } else {
      p5.stroke(200, 0, 100);
      p5.point(i, 0, imaginary);
    }
  }

  p5.stroke(255, 255, 255);
  p5.strokeWeight(1);
  subeWireFrame(p5, complexPlaneDimensions);
  if (imaginary > -complexPlaneDimensions * 0.5) {
    imaginary -= 0.01;
  }
  turn += 0.005;
}
