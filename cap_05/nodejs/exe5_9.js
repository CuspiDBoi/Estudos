const prompt = require ("prompt-sync") ()
const protudo = prompt("Produto: ") //Lê o nome do produto e...
const num = Number(prompt("N° de Etiquetas: ")) //quantidades de etiquetas

for (let i = 1; i <= num/2; i++){
    console.log(`${protudo.padEnd(30)} ${protudo.padEnd(30)}`)
}
if(num % 2 == 1){
    console.log(protudo)
}