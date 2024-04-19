const formulario = document.querySelector("form")

const saida1 = document.querySelector("#saida1")
const saida2 = document.querySelector("#saida2")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(formulario.ladoA.value)
    const ladoB = Number(formulario.ladoB.value)
    const ladoC = Number(formulario.ladoC.value)
    let nomeclatura 
    let aviso 

    if(ladoA+ladoB < ladoC || ladoB+ladoC < ladoA || ladoA+ladoC < ladoB ){
        aviso = ("Não é possivel formar um triângulo")

    } else if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA){
        aviso = ("Lados podem formar um triângulo")
        nomeclatura = ("Equilátero")


    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        aviso = ("Lados podem formar um triângulo")
        nomeclatura = ("Escaleno")

 
    } else {
        aviso = ("Lados podem formar um triângulo")
        nomeclatura = ("isóceles")

    }

    saida1.innerText = `${aviso}`
    saida2.innerText = `Tipo: ${nomeclatura}`

})