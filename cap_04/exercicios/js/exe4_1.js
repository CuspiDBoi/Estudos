const formulario = document.querySelector("form")

const saida = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = formulario.numero.value
    const parimpar =  Number.isInteger(numero / 2) ? saida.innerText = `${numero} é Par` : saida.innerText = `${numero} é Ímpar`

   // if(Number.isInteger(parimpar)){

       // saida.innerText = `${numero} é Par`

   // } else{
    //    saida.innerText = `${numero} é ímpar`
   // }
})