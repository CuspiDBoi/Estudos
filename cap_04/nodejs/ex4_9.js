const prompt = require ("prompt-sync") ()

const numero = Number(prompt("Digite uma centena: "))
let unidade
let dezena
let centena



if(numero >= 100 && numero < 1000 ){
    unidade = Math.floor (numero % 10)
    dezena = Math.floor ((numero % 100)/10)
    centena = Math.floor (numero / 100)

    console.log(`Invertido: ${unidade}${dezena}${centena}`)

} else{
    console.log("Lamento, isso não é uma centena, campeão.")

}