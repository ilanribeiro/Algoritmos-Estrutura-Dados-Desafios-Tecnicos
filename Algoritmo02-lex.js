// Crie um hashmap (ou um objeto simples em PHP) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
// Leve em consideração que a divisão não deve permitir dividendo 0
// A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
// A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
// Função de multiplicação - Idem
// A função de divisão aceita dois parâmetros: a e b.


const objectLikeHashMap = {
  sum: (array) => {
    const sumResult = array.reduce((a, b) => a + b, 0);

    return sumResult;
  },
  sub: (array) => {
    const subResult = array.reduce((a, b) => a - b, 0);

    return subResult;
  },
	mul: (array) => {
    const multResult = array.reduce((a , b) => a * b)

    return multResult;
  },
  div: (a, b) => {
    if (b === 0) {
      return "Divisão não permite dividendo 0";
    }

    const divResult = a / b;

    return divResult;
  },
};

const testNumbers = [1,2,3,4,5,6,7]
const dividend = 550;
const divider = 25;

console.log('Adição: ', objectLikeHashMap.sum(testNumbers));
console.log('Subtração: ', objectLikeHashMap.sub(testNumbers));
console.log('Multiplicação: ', objectLikeHashMap.mul(testNumbers));
console.log('Divisão: ', objectLikeHashMap.div(dividend , divider));