
/*Existiram functions que mexerão com o elemento dessa variavel, então declarar fora*/
let tarefaSelecionada = null

function AddTarefa() {
  const entradaDoUsuario = document.getElementById("NovaTarefa").value.trim();
  if (entradaDoUsuario === '') return;

  const lista = document.getElementById("tarefaJS")
  const novoItem = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const textoTarefa = document.createElement("span");
  textoTarefa.textContent = entradaDoUsuario;
  textoTarefa.className = "clicavel";
  
  const descricaoTarefa = document.createElement("small");
  descricaoTarefa.className = "descricao";
  descricaoTarefa.style.display = "blocoDeEscrita";

  textoTarefa.onclick = function() {
    textoTarefa = descricaoTarefa
    document.getElementById("descricaoTarefa").value = textoTarefa.textContent || ""
    document.getElementById("descricao").style.display = "flex"
  }

  novoItem.appendChild(checkBox);
  novoItem.appendChild(textoTarefa);
  lista.appendChild(novoItem);
  novoItem.appendChild(descricaoTarefa)

  document.getElementById("NovaTarefa").value = '';
}

document.addEventListener("change", function(event) {
  if (event.target.type === "checkbox") {
    const checkbox = event.target;
    const itemDaLista = checkbox.closest("li");
    console.log("Checkbox foi clicado!");
    console.log("Este é o <li> correspondente:", itemDaLista);

     const listaConcluida = document.getElementById("tarefaConcluida");
    const listaEmProgresso = document.getElementById("tarefaJS");

    if (checkbox.checked) {
      // Checkbox foi marcado: mover para lista de concluídos
      listaConcluida.appendChild(itemDaLista);
    } else {
      // Checkbox foi desmarcado: voltar para lista de em progresso
      listaEmProgresso.appendChild(itemDaLista);
    }
  }
});

      function salvarPopUp() {
        
      }

function trocaDeTemaJS() {
  document.body.classList.toggle('claro');
}


