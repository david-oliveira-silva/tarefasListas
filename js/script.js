let listaTarefas = [];
let res = document.getElementById("tarefas");

function add(){
let Tarefas = document.getElementById("addTarefa").value;
listaTarefas.push({
    tarefa:Tarefas,
    concluida :false
    
})
mostraTarefas();
}
function mostraTarefas(){
   
    let novaLista = ""
    listaTarefas.forEach((item,posicao )=> {
    novaLista = novaLista + 
    `<div id="listaTarefa">
<button class="material-icons"id="verificar"onclick= "verificar(${posicao})">done</button>
<h3>${item.tarefa}</h3>
<button class="material-icons" id="deletar"onclick= "deletar(${posicao})">delete</button>
</div>`
    })
res.innerHTML = novaLista;
    
}
function deletar(posicao){
    listaTarefas.splice(posicao,1);
    mostraTarefas();
    
}
function verificar(posicao){
    listaTarefas[posicao].concluida = !listaTarefas[posicao].concluida
    mudarCor = document.getElementById("itemarefa").value
    mudarCor.innerHTML = style.background = "red"
    mostraTarefas();
    

}


