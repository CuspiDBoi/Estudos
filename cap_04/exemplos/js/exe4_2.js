const formulario = document.querySelector("form")

const resp1 = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = formulario.nome.value
    const masculino = formulario.masculino.checked
    const altura = Number(formulario.altura.value)

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2) //operador ternario, para instruções simples é o mais utilizado, faz a mesma coisa que
    //... instrução comentada abaixo

    //let peso

    /*if (masculino) {
        peso =  22 * Math.pow(altura, 2)

    } else{
        peso = 21 * Math.pow(altura, 2)
    } */
resp1.innerText = (`${nome}: Seu peso ideal é ${peso.toFixed(3)}`)
})



formulario.addEventListener("reset", () => {
    resp1.innerText = ""
})