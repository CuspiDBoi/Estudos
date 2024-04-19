const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const hBrasil = Number (formulario.hbrasil.value)
    let horaFranca = hBrasil+5

    if(horaFranca > 24){
    horaFranca = horaFranca - 24

    }
resp.innerText = `Hora na frança: ${horaFranca.toFixed(2)}`
})