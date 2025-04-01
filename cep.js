
function apagar (){
            document.getElementById('cep').value = "";
            document.getElementById('estado').value = "";
            document.getElementById('logradouro').value = "";
            document.getElementById('bairro').value = "";
            document.getElementById('localidade').value = "";
            document.getElementById('numero').value = "";
}


document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if(cepInformado.length == 8){
        localStorage.setItem("cep2", cepInformado);
    }   else {
        apagar()
    }


fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data => {
        if(!data.erro){
            document.getElementById('cep').value = data.cep;
            document.getElementById('estado').value = data.estado;
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('localidade').value = data.localidade;
        }else{
            alert("CEP não encontrado.")
            apagar()
        }
    })
    .catch(error => console.error("Erro ao buscar o CEP: ", error));
})

document.addEventListener('DOMContentLoaded', () => {

    const cepSalvo = localStorage.getItem("cep2");


    if(cepSalvo){
        document.getElementById('cep').value = cepSalvo;
        document.getElementById("cep").dispatchEvent(new Event("blur"));
        return;
    }
    else{
         return;
        }
})