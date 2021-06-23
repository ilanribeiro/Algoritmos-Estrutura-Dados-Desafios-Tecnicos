// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// O resultado deve ser armazenado em uma variável. Por exemplo:
// $id = generarId()
// id vale ~ abc1-bb12-234a-bcc2


const codeUnit = () => {
  const code = Math.random().toString(36).substr(-4)
  
	return code;
}

const generateId = (code) => {
	return `${code()}-${code()}-${code()}-${code()}` 
}

// O resultado deve ser armazenado em uma variável.
const id = generateId(codeUnit);

console.log(id);