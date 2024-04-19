const prompt = require ("prompt-sync")();

const salario = Number (prompt("Digite seu salário R$: "))
const idade = Number(prompt("Digite seu tempo de serviço nesta empresa: "))

const idadeA = Math.floor(idade / 4)

const aumento = Number (salario * idadeA)/100

console.log("==========================")
console.log(`O Seu número de quadriênios é ${idadeA}\nVocê tem direito há ${idadeA}% de aumento que contabiliza ${aumento.toFixed(2)} R$.
\nNovo salário R$: ${(aumento + salario).toFixed(2)}`)
console.log("==========================")