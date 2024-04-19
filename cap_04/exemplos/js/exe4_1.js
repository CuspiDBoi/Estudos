const formulario = document.querySelector("form")

const respM = document.querySelector("h3")
const respS = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {
    const nomeA = formulario.nomedoA.value
    const primeiraNota = Number(formulario.Pnota.value)
    const segundaNota = Number(formulario.Snota.value)

    const media = (primeiraNota + segundaNota)/2

    respM.innerText = `Média das Notas ${media.toFixed(2)}`
    
    if(media>=7){
        respS.innerText = `Parabéns ${nomeA}! Você foi aprovado(a)! `
        respS.style.color = "blue"
    }
    else if (media>=4){
        respS.innerText = `Atenção ${nomeA}. Você está em exame `
        respS.style.color = "green"

    }
    else{
        respS.innerText = `Ops ${nomeA}... Você foi reprovado(a)! `
        respS.style.color = "red"
    }

    e.preventDefault()
}

)