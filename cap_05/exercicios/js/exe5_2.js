const formulario = document.querySelector("form")
const saida = document.querySelector("pre")

formulario.addEventListener("submit",(e)=> {
    e.preventDefault()

    const numeroChi = Number(formulario.inChinchilas.value)
    const anos = Number(formulario.inAnos.value)
    let contagem = numeroChi
    let resposta = ""

    for (let i = 2; i <= anos; i++) {
        contagem = contagem*3
        resposta = resposta + i + "° Ano: " + contagem + " Chinchilas"+ " \n" 
        
    } 
    console.log(numeroChi)
    saida.innerText = (`1° Ano: ${numeroChi} Chinchilas \n${resposta} `)
})

//fazer de outra forma depois