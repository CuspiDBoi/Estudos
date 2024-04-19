const formulario = document.querySelector("form") //seleciona todo o campo formulario

const respF = document.querySelector("h3") //seleciona a tag h3 pra saida de dados: nome do filme
const respM = document.querySelector("h4") //seleciona a tag h4 pra saida de dados: tempo do filme
//tudo isso é uma referencia as tags.

formulario.addEventListener("submit", (e) => { //"ouvite, ao clicar no corresponde de submit um evento vai ocorrer"
    const nome = formulario.nomeFilme.value //faz referencia a tag "nomeFilme" na qual o nome do filme esta e armazena o dado dela em uma variavel
    const tempo = Number (formulario.duracao.value) // faz referencia a tag "duracao" na qual o tempo do filme esta e armazena o dado dela numa variavel

    const horas = Math.floor(tempo / 60) //variavel pra calcular horas e minutos do filme, aqui pego o tempo e divido por 60 junto de um comando matematico do javascript
    const minutos = tempo % 60 //aqui pego o que sobra da divisão, são os minutos

    respF.innerText = `${nome}` //saida de dados: nome do filme
    respM.innerText = `${horas} Hora(s) e ${minutos} minuto(s)` //saida de dados: tempo do filme

    e.preventDefault() //evita envio do form
}) 
