// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
// Obtenha uma array contendo apenas as letras
// Obtenha uma array contendo apenas os números
// Obtenha o maior número da array acima

const initialArray = ['a', 10, 'b', 'hola', 122, 15]

const findNumber = (element) => {
    if(typeof element == 'number'){
        return element
    }
}

const findString = (element) => {
    if(typeof element == 'string'){
        return element
    }
}

// Obtenha uma array contendo apenas as letras
let stringArray = initialArray.filter(findString)
console.log('Array de letras: ', stringArray);

// Obtenha uma array contendo apenas os números
let numberArray = initialArray.filter(findNumber)
console.log('Array de numeros: ', numberArray);

// Obtenha o maior número da array acima
let bigger = 0

numberArray.map(number => number > bigger
	? bigger = number
	: bigger)

console.log('Maior número do array de numeros: ', bigger);