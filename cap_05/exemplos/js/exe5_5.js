//terminar hoje mais tarde, se esforce mais!
const formulario = document.querySelector("form")

const saida1 = document.querySelector("#contas") 
const saida2 = document.querySelector("#totalContas")

let resposta = ""
let numContas = 0 //inicializa contador...
let valTotal = 0 //e acumulador...

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()

    const descricao = formulario.ContaDescrição.value
    const valor = Number(formulario.ValorPagar.value)

    numContas++ //adiciona valores ao contador e acumulador
    valTotal = valTotal+valor // ou: valTotal += valor
    resposta = resposta + descricao + "- R$:" + valor.toFixed(2) + "\n"
    saida1.innerText = `${resposta} -------------------------------------------`
    saida2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    formulario.ContaDescrição.value = "" //limpa campos do form
    formulario.ValorPagar.value = ""
    formulario.ContaDescrição.focus() //posiciona no campo ContaDescrição do form

}

)