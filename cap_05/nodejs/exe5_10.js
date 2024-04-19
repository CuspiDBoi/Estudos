const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor: "))
const num = Number(prompt("N° Parcelas: "))

const valorParcelas = Math.floor(valor / num)
const valorFinal = valorParcelas + (valor % num)

for(let i=1; i < num; i++){
    console.log(`${i} parcela: R$${valorParcelas.toFixed(2)}`)
}
console.log(`${num} parcerla: R$ ${valorFinal.toFixed(2)}`)