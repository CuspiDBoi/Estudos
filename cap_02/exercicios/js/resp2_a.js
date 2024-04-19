const formulario = document.querySelector("form");

const respNome = document.querySelector("#nomeR");
const respPromo = document.querySelector("#promo");

formulario.addEventListener("submit", (e) => {

    const nomeDom = formulario.Nmedicamento.value;
    const precoDom = Number(formulario.Ppreco.value);
    const promoDois = Number (Math.floor (precoDom*2));


    respNome.innerText = `Promoção de ${nomeDom}`;
    respPromo.innerText = `Leve dois por apenas R$: ${promoDois.toFixed(2)}`;
    
   
    e.preventDefault();
})