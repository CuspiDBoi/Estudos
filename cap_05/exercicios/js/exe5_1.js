const formulario = document.querySelector("form")
const saida = document.querySelector("h3")

formulario.addEventListener("submit", (e) =>{


    const fruta = formulario.inFruta.value
    const numero = Number(formulario.inNumero.value)
   
   

    let resposta = ""

    for (let i = 1; i < numero; i++) {
        resposta = resposta + fruta + " * " 
        
    }

    if(numero == 0){
        saida.innerText = (`estamos sem ${fruta} =( `)

    } else {
    saida.innerText = (`${resposta} ${fruta}`)
    }  
    e.preventDefault()

})

//fazer de outra forma depois