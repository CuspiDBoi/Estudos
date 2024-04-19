const bairro = prompt("Bairro de entregas: ")
let taxaEntrega
switch (bairro) {
    case "centro":
        taxaEntrega = 5.00
        break;
    case "fragata":
    case "Três vendas":
        taxaEntrega = 7.00
        break
    case "Laranjal":
        taxaEntrega = 10.00
        break

    default: 
        taxaEntrega = 8.00
        break;
}
alert(`Taxa de entrega R$: ${taxaEntrega.toFixed(2)}`)

//esse código usa switch/case, tal estrutura é muito util qunado tivermeos varias  alternativas... 
//...definidas a partir de uma unica variavel