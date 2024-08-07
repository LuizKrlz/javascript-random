/* eslint-disable no-labels */
const itens = [
  { value: "a" },
  { value: "c" },
  { value: "ci" },
  { value: "cr" },
  { value: "f" },
  { value: "h" },
  { value: "i" },
  { value: "l" },
  { value: "o" },
  { value: "p" },
  { value: "pi" },
  { value: "pr" },
  { value: "r" },
  { value: "s2" },
  { value: "s8" },
  { value: "w" },
  { value: "z" },
];

const columns = Array.from({ length: 4 }, () => []);

let totalItens = itens.length;

const initialColunas = 4;

let totalColumns = initialColunas;

for (let i = 0; i < 4; i++) {
  const totalLinhas = Math.ceil(totalItens / totalColumns);

  if (columns[i].length < totalLinhas) {
    const totalAvailable = totalLinhas - columns[i].length;

    columns[i] = itens.splice(0, totalAvailable);

    total -= totalAvailable;

    totalColumns--;
  }
}

console.log(colunas);
