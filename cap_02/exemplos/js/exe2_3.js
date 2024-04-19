const formulario = document.querySelector("form");

const Presp1 = document.querySelector("#Presp1");
const Presp2 = document.querySelector("#Presp2");
const Presp3 = document.querySelector("#Presp3");

formulario.addEventListener( "submit", (e) =>{

    const nomev = formulario.Pveiculo.value
    
    const precoV = Number (formulario.Ppreço.value);
    const entrada = Math.floor(precoV * 0.50);
    const saldo = (precoV * 0.50)/12

    Presp1.innerText = `Promoção: ${nomev}`;
    Presp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    Presp3.innerText = `+12x de R$: ${saldo.toFixed(2)}`

    e.preventDefault();

    console.log(saldo)
});