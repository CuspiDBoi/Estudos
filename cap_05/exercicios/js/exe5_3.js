const formulario = document.querySelector("form")
const saida1 = document.querySelector("#saida1")
const saida2 = document.querySelector("#saida2")

formulario.addEventListener("submit", (e)=>{
  e.preventDefault()
    const numero = Number(formulario.inNumero.value)


    //let resposta = ""
    let acumuladora = ""
    let divisores = Number()
    let soma = Number(1)
    for (let divisores = 2; divisores < numero; divisores++) {
      if(numero % divisores == 0){
        acumuladora = acumuladora + " , " + divisores
        console.log (acumuladora)
        soma = soma+divisores
       // console.log(soma)
      
      }
      //resposta = resposta + (numero/divisores) + "\n"
    }
  
    saida1.innerText = (`Divisores do ${numero}: 1 ${acumuladora} (soma:${soma})`) //terminar quando voltar da igreja
    if(numero == soma){
      saida2.innerText = (`${numero} É um Número perfeito`)
    } else {
      saida2.innerText = (`${numero} Não É um Número perfeito`)
    }

    //console.log(resposta)
    //console.log(soma)


}) 

/* let condicional = true
let contador = 0

console.log("Iniciando while")

while (condicional == true) {
  if (contador == 5) {
    condicional = false
  }
	contador = contador + 1
  console.log("Contador: ", contador)
}

console.log("Terminando while") */ //exemplo