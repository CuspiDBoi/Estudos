const formulario = document.querySelector("form")
const saida = document.querySelector("h3")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numero = Number(formulario.numero.value) //pego o valor do formulário

    let resposta = `Entre ${numero} e 1:  `
    
    for(let i = numero; i > 1; i--){
        resposta = resposta + i + ", "
    } 
   
    console.log(resposta)
 
    saida.innerText = resposta + "1." 

 /*     let resposta = `Entre ${numero} e 1: ${numero} `
 
    for(let i = numero - 1; i > 0; i-- ){
        resposta = resposta + "," + i
    }
    saida.innerText = resposta */ //Outra forma de fazer a mesma coisa acima, todavia sem  ponto no final.
})