const formulario = document.querySelector("form")
const saida = document.querySelector("h3")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const veloP = Number (formulario.velocidadeP.value)
    const veloC = Number (formulario.velocidadeC.value)
    let medidorMulta = ((veloC - veloP)*100)/veloP


    if((veloC+medidorMulta) > veloP ){
        saida.innerText = `Situação: Multa leve`

        if(medidorMulta >= 21 ){
            saida.innerText = `Situação: Multa grave`
        }
            
    } else {
        saida.innerText = `Situação: sem multa`
    }

   console.log(medidorMulta)

   //vou conseguir!

})

 /* switch(medidorMulta){
        case 10:
            resultado = "Multa leve"
            break
    } */

    // .innerText = `${resultado}`

    /*
    
      if(20 <= (medidorMulta*20)/10){
    saida.innerText = `Multa leve`

    if(20 > (medidorMulta*20)/10){
        saida.innerText = `Multa grave`
      }
  }  else {
    saida.innerText = `Sem multa`
  }
    
    */