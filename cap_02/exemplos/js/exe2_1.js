
const frm = document.querySelector("form") //aqui selecionei toda a tag "FORM"
const resp =document.querySelector("h3") //Aqui selecionei toda a tag "H3"

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value //obtém o nome digitado no form (Funciona sem o "frm" no começo. Não sei o porque.)
    resp.innerText = `olá ${nome}` //exibe a resposta do programa 

    e.preventDefault()
})

