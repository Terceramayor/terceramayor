/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import initializeMatrix from './utils/initializeMatrix';
import monsterrat from './assets/MontserratThin.ttf';

let turn = Math.random() * 50;
let timer;

const matrixDimension = 25;
let matrix = initializeMatrix(matrixDimension);
const nodesSpacing = matrixDimension * 0.5;
const blockCentering = matrix.length * 0.5;
let nextStepMatrix = [...matrix];

function subeWireFrame(p5, matrixLength, spacing) {
  let zCoordenate;
  let yCoordenate;
  const leftCoordenate = -matrixLength * 0.5 * spacing;
  const rightCoordenate = matrixLength * 0.5 * spacing;

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

function countNeighbours(i, j, k, golMatrix) {
  let aliveNeighbours = 0;

  for (let kShift = -1; kShift < 2; kShift += 1) {
    if (golMatrix[i + 1] && golMatrix[i + 1][j] && golMatrix[i + 1][j][k + kShift] && golMatrix[i + 1][j][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i + 1] && golMatrix[i + 1][j + 1] && golMatrix[i + 1][j + 1][k + kShift] && golMatrix[i + 1][j + 1][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i] && golMatrix[i][j + 1] && golMatrix[i][j + 1][k + kShift] && golMatrix[i][j + 1][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i - 1] && golMatrix[i - 1][j + 1] && golMatrix[i - 1][j + 1][k + kShift] && golMatrix[i - 1][j + 1][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i - 1] && golMatrix[i - 1][j] && golMatrix[i - 1][j][k + kShift] && golMatrix[i - 1][j][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i - 1] && golMatrix[i - 1][j - 1] && golMatrix[i - 1][j - 1][k + kShift] && golMatrix[i - 1][j - 1][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i] && golMatrix[i][j - 1] && golMatrix[i][j - 1][k + kShift] && golMatrix[i][j - 1][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
    if (golMatrix[i + 1] && golMatrix[i + 1][j - 1] && golMatrix[i + 1][j - 1][k + kShift] && golMatrix[i + 1][j - 1][k + kShift] === 1) {
      aliveNeighbours += 1;
    }
  }

  if (golMatrix[i] && golMatrix[i][j] && golMatrix[i][j][k - 1] && golMatrix[i][j][k - 1] === 1) {
    aliveNeighbours += 1;
  }

  if (golMatrix[i] && golMatrix[i][j] && golMatrix[i][j][k + 1] && golMatrix[i][j][k + 1] === 1) {
    aliveNeighbours += 1;
  }
  return aliveNeighbours;
}

function nextIterationMatrix(currentMatrix) {
  const nextMatrix = [];
  for (let i = 0; i < currentMatrix.length; i += 1) {
    nextMatrix[i] = [];
    for (let j = 0; j < currentMatrix[i].length; j += 1) {
      nextMatrix[i][j] = [];
      for (let k = 0; k < currentMatrix[i][j].length; k += 1) {
        if (countNeighbours(i, j, k, currentMatrix) >= 6 && countNeighbours(i, j, k, currentMatrix) <= 9) {
          nextMatrix[i][j][k] = 1;
        } else if (countNeighbours(i, j, k, currentMatrix) < 6 || countNeighbours(i, j, k, currentMatrix) > 9) {
          nextMatrix[i][j][k] = 0;
        } else {
          nextMatrix[i][j][k] = 1;
        }
      }
    }
  }

  return nextMatrix;
}

export function preload(p5) {
//   p5.loadFont(monsterrat);
}

export function setup(p5, parentRef) {
  p5.createCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.9, p5.WEBGL).parent(parentRef);
  p5.background(100);
  timer = p5.millis();
}
export function draw(p5) {
  p5.background(100);
  p5.pointLight(255, 255, 255, matrix.length * nodesSpacing, 0, matrix.length * nodesSpacing);
  matrix = [...nextStepMatrix];
  p5.rotateX(turn * 0.75);
  p5.rotateY(turn * 1.25);
  p5.rotateZ(turn);

  p5.stroke(255, 255, 255);
  p5.strokeWeight(1);
  subeWireFrame(p5, matrix.length, nodesSpacing);

  p5.stroke(0, 0, 0);
  p5.strokeWeight(1);

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      for (let k = 0; k < matrix[i][j].length; k += 1) {
        if (matrix[i][j][k] === 1) {
          p5.push();
          p5.translate(nodesSpacing * i - blockCentering * nodesSpacing,
            nodesSpacing * j - blockCentering * nodesSpacing,
            nodesSpacing * k - blockCentering * nodesSpacing);
          p5.specularMaterial(i * 10 + 100 * Math.sin(turn * 2),
            j * 20 + 100 * Math.cos(turn * 5),
            k * 40 + 100 * Math.sin(turn * 7));
          p5.box(nodesSpacing, nodesSpacing, nodesSpacing);
          p5.pop();
        }
      }
    }
  }

  if (p5.millis() > 500 + timer) {
    timer = p5.millis();
    nextStepMatrix = nextIterationMatrix(matrix);
  }

  turn += 0.005;
}
