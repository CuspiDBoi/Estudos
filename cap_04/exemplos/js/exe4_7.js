const formulario = document.querySelector("form");

const saida1 = document.querySelector("#notacem");
const saida2 = document.querySelector("#notacinquenta");
const saida3 = document.querySelector("#notadez");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const valorS = formulario.valorSaque.value

    if(valorS % 10 != 0 )/* se saque não é multiplo de 10*/ {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100");
        formulario.valorSaque.focus()
        return
    }
    const notascem = Math.floor(valorS / 100) //calcula notas de cem
    let resto = valorS % 100 //quanto sobra pagar
    const notasCinquenta = Math.floor (resto / 50) //calcula as notas de 50
    resto = resto % 50 //quanto ainda sobra
    const notasDez = Math.floor (resto / 10) //calcula as notas de 10
    
    if(notascem > 0){ //exibe as notas se houver    
        saida1.innerText = `Notas de R$ 100: ${notascem}`}

    if(notasCinquenta > 0){ //exibe as notas se houver    
        saida2.innerText = `Notas de R$ 50: ${notasCinquenta}`}

    if(notasDez > 0){ //exibe as notas se houver    
        saida3.innerText = `Notas de R$ 10: ${notasDez}`}
        
})