const prompt = require ("prompt-sync")();

const peso = Number(prompt("Peso (KG):"));
const consumoD = Number(prompt("Consumo diario (gr): "));

const duracao = Math.floor ((peso*1000)/consumoD);

const sobra =  (peso*1000) - (duracao*consumoD);

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gr`);

