module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }

  let even = true;
  const rez = [];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (even) {
        rez.push(matrix[i][j]);
      } else {
        rez.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
    even = !even;
  }
  return rez;
};
