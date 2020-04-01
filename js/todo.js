let btnAdicionar = document.querySelector("#adicionar");
let container = document.querySelector("main.container")
let inputTextoTarefa = document.querySelector('#textoTarefa')

function adicionarTarefa() {
    let texto = inputTextoTarefa.value
    if (texto.length > 0) {
        let card = document.createElement('div')
        card.setAttribute('class', 'card m-3')

        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        let btnFinalizarTarefa = document.createElement('button');
        btnFinalizarTarefa.setAttribute('class', 'btn btn-success')
        btnFinalizarTarefa.textContent = "Finalizar Tarefa"

        //deletando a tarefa qnd clico em finalizar
        //qnd nao criamos usamos o abaixo:
        // let cardPai = event.target.parentNode.parentNode;
        // cardPai.remove()

        //qnd criamos nossa estrutura usamos:
        //card.remove()
        btnFinalizarTarefa.onclick = function (event) {
            card.remove()
        }

        card.appendChild(cardBody);
        cardBody.textContent = texto;
        cardBody.appendChild(btnFinalizarTarefa);

        container.appendChild(card);

        inputTextoTarefa.value = "";
    } else {
        alert("voce deve digitar uma tarefa")
    }
}

btnAdicionar.onclick = adicionarTarefa

inputTextoTarefa.onkeyup = function (event) {
    if (event.key == "Enter") {
        adicionarTarefa()
    }

    // inputTextoTarefa.onkeypress = function(){

    // 
    //alert("Tarefa adicionada!");




    // btnAdicionar.addEventListener('click',function(){
    //     alert("Tarefa adicionada!");
    // })

    // inputTextoTarefa.onkeydown = function{
    //     console.log("estou no evento")

    // 
}