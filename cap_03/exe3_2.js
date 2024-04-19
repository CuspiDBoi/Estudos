const prompt = require ("prompt-sync")();

console.log(`==================================================================================`)
console.log(`                            Revenda de Veículos JS`)
console.log(`==================================================================================`)

const nomeV = prompt("Veiculo: ");
const precoV = Number(prompt("Preço R$: "))

const entrada = (precoV / 2);
const parcelas = Number (precoV / 12)/2;

console.log(`Promoção: ${nomeV}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcelas.toFixed(2)}`)