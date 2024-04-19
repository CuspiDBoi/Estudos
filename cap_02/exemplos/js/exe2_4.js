const formulario = document.querySelector("form")

const resp = document.querySelector("#saida")

formulario = addEventListener("submit", (e) =>{
    const quilo = Number (formulario.Pquilo.value)
    const consumo = Number (formulario.Pconsumo.value)

    const valorP = (quilo / 1000) * consumo

    resp.innerText = `Valor a pagar R$: ${valorP}`

    e.preventDefault()
    console.log(valorP)
}

)

