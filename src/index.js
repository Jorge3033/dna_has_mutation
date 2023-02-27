function hasMutation(dna) {
  const n = dna.length;
  let count = 0;

  // Buscar secuencias horizontales, verticales y oblicuas
  for (let row = 0; row < n && count < 2; row++) {
    let horizontal = 0,
      vertical = 0,
      diagonal1 = 0,
      diagonal2 = 0;

    for (let col = 0; col < n && count < 2; col++) {
      // Secuencia horizontal
      if (
        col < n - 3 &&
        dna[row][col] === dna[row][col + 1] &&
        dna[row][col] === dna[row][col + 2] &&
        dna[row][col] === dna[row][col + 3]
      ) {
        horizontal++;
      } else {
        horizontal = 0;
      }

      // Secuencia vertical
      if (
        col < n - 3 &&
        dna[col][row] === dna[col + 1][row] &&
        dna[col][row] === dna[col + 2][row] &&
        dna[col][row] === dna[col + 3][row]
      ) {
        vertical++;
      } else {
        vertical = 0;
      }

      // Secuencia diagonal 1 (hacia abacolo a la derecha)
      if (
        row < n - 3 &&
        col < n - 3 &&
        dna[row][col] === dna[row + 1][col + 1] &&
        dna[row][col] === dna[row + 2][col + 2] &&
        dna[row][col] === dna[row + 3][col + 3]
      ) {
        diagonal1++;
      } else {
        diagonal1 = 0;
      }

      // Secuencia diagonal 2 (hacia abacolo a la izquierda)
      if (
        row >= 3 &&
        col < n - 3 &&
        dna[row][col] === dna[row - 1][col + 1] &&
        dna[row][col] === dna[row - 2][col + 2] &&
        dna[row][col] === dna[row - 3][col + 3]
      ) {
        diagonal2++;
      } else {
        diagonal2 = 0;
      }

      // Si encontramos 2 o más secuencias, salimos del bucle
      if (horizontal > 0 || vertical > 0 || diagonal1 > 0 || diagonal2 > 0) {
        count++;

        if (count >= 2) return true;
      }
    }
  }

  return false;
}

// Ecolemplo de uso
const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];

console.log(dna.map((element) => element + "\n"));
const hasMut = hasMutation(dna);
console.log("has Mut: " + hasMut);
