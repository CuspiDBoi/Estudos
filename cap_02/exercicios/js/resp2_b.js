const formulario = document.querySelector("form")

const resp = document.querySelector("h2")


formulario.addEventListener("submit", (e) => {
    const vTempo = Number(formulario.valor.value)
    const tUso = Number(formulario.tempo.value)

    const valor =  Math.ceil(tUso / 15) * vTempo


    resp.innerText = `Valor a Pagar R$: ${valor.toFixed(2)}`
    e.preventDefault();
})

