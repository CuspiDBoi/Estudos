const formulario = document.querySelector("form");
const saidaNome = document.querySelector("span");
const saida = document.querySelector("pre")

const pacientes = []

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = formulario.inPaciente.value
    pacientes.push(nome)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    saida.innerText = lista
    formulario.inPaciente.value = ""
    formulario.inPaciente.focus()
})
formulario.btUrgencia.addEventListener("click", () => {
    if (!formulario.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        formulario.inPaciente.focus()
        return
    }
    const nome = formulario.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    saida.innerText = lista
    formulario.inPaciente.value = ""
    formulario.inPaciente.focus
})

formulario.btAtender.addEventListener("click", ()=>{
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        formulario.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()
    saidaNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i)=>(lista += `${i + 1}. ${paciente} \n`))
    saida.innerText = lista
})

