const formulario = document.querySelector("form") //seleciono o formulario no codigo HTML
const saida = document.querySelector("#saida") //Seleciono o h3 com o id = saida no codigo HTML

//Abaixo criei um ouvinte de evento, ao clicar no "submit" o ouvinte realizará uma ação
formulario.addEventListener("submit", (e)=>{
    e.preventDefault() //evita o envio do formulario

    const numero = formulario.numerosEsimbolos.value //seleciono o respectivo campo.
    let estrelas = "" //Variável que irá concatenar as estrelas/traços
    for(let i = 1;i <= numero;i++){ //crio um laço de repetição de "1" até "numero"
        if(i % 2 == 1){
            estrelas = estrelas + "*" //na posiçâo ímpar do i: *
        } else{
            estrelas = estrelas + "-" //na posição par: -
        }

        saida.innerText = estrelas //exibe as estrelas
    }

}

)