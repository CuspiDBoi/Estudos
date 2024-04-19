const formulario = document.querySelector("form");
const saidaUm = document.querySelector("#saida1");
const saidaDois = document.querySelector("#saida2");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const deposito = Number(formulario.valor.value)
    let troco 
    let tempo

    if(deposito >= 1 && deposito <= 1.74){
        tempo = 30
        troco = deposito - 1
       // saidaUm.innerText = `Tempo: ${tempo}`
       // saidaDois.innerText = `Troco: ${troco.toFixed(2)}`

        console.log(troco.toFixed(2))
    }


    if(deposito >= 1.75 && deposito <= 2.99){
        tempo = 60
        troco = deposito - 1.75
       // saidaUm.innerText = `Tempo: ${tempo}`
      //  saidaDois.innerText = `Troco: ${troco.toFixed(2)}`

        console.log("pimba")
    } 

    if(deposito >= 3){
        tempo = 120
        troco = deposito - 3
      //  saidaUm.innerText = `Tempo: ${tempo}`
       // saidaDois.innerText = `Troco: ${troco.toFixed(2)}`

        console.log("pimba")
    } 

    saidaUm.innerText = `Tempo: ${tempo}`
    if (troco > 0) {
        saidaDois.innerText = `Troco R$: ${troco.toFixed(2)}`
      }

})

/* 

  let bruto = formulario.valor.value
    const Svalor = Math.round(formulario.valor.value)
    let troco
    let rt

    if (Svalor) {
        if (Svalor >= 1.00) {
            tempo = 30
            troco = 1
            rt = bruto - troco

            saidaUm.innerText = `Tempo: ${tempo}`
          //  if (Svalor  > 1.1) {
                saidaDois.innerText = `Troco: ${rt.toFixed(2)}`
           // }
        }

        if (Svalor >= 1.75) {
            tempo = 60
            troco = 1.75
            rt = bruto - troco

            saidaUm.innerText = `Tempo: ${tempo}`
           // if (Svalor > 1.75) {
                saidaDois.innerText = `Troco: ${rt.toFixed(2)}`
          //  }
        }

        if (Svalor >= 3.00) {
            tempo = 120
            troco = 1
            rt = bruto - troco

            saidaUm.innerText = `Tempo: ${tempo}`
           // if (Svalor > 3) {
                saidaDois.innerText = `Troco: ${rt.toFixed(2)}`
            //}
        }
    }

*/