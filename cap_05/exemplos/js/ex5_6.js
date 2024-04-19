const formulario = document.querySelector("form") //seleciona o campo
const saida = document.querySelector("h3")


formulario.addEventListener("submit", (e)=>{ //cria ouvinte
    e.preventDefault()

    const num = Number(formulario.inNumero.value)

    let temDivisor = 0

    for(let i = 2; i <= num /2 ;i++){ //percorre os divisores de num
        if(num % i == 0){ // se tem um divisor
            temDivisor = 1 //muda a flag
            break // sai da repetição
        }
    }
    if(num > 1 && !temDivisor){
        saida.innerText = `${num} é primo.`

    } else {
        saida.innerText = `${num} não é primo.`

    }
})