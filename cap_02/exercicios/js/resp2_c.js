const formulario = document.querySelector("form");

const resp1 = document.querySelector("#outpromo");
const resp2 = document.querySelector("#out3Produ");

formulario.addEventListener("submit", (e) =>{
    const nome = formulario.inproduto.value;
    const preco = Number(formulario.inpreco.value);

    const promo = Number( Math.round ((preco*3) - (preco / 2)) )

    const resto = preco / 2
    resp1.innerText = `${nome} - Promoção: Leve 3 por ${promo.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas R$: ${resto.toFixed(2)}`
    console.log(promo)
    e.preventDefault()

})