/* eslint-disable max-len */
export default function initializeMatrix(elements) {
  const matrix = [];
  for (let i = 0; i < elements; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < elements; j += 1) {
      matrix[i][j] = [];
      for (let k = 0; k < elements; k += 1) {
        if (i > 0.4 * elements && i < 0.6 * elements && j > 0.2 * elements && j < 0.4 * elements && k > 0.4 * elements && k < 0.6 * elements) {
          matrix[i][j][k] = (Math.random() > 0.825) ? 1 : 0;
        } else if (i > 0.4 * elements && i < 0.6 * elements && j > 0.6 * elements && j < 0.8 * elements && k > 0.4 * elements && k < 0.6 * elements) {
          matrix[i][j][k] = (Math.random() > 0.825) ? 1 : 0;
        } else {
          matrix[i][j][k] = 0;
        }
      }
    }
  }
  return matrix;
}
