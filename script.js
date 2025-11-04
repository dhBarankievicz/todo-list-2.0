const textoNovaTarefa = document.getElementById("tarefaInput");
const botaoNovaTarefa = document.getElementById("tarefaAdd");
const main = document.querySelector(".main_tarefas")

//Add tarefa
botaoNovaTarefa.addEventListener("click", () => {
    let novaTarefa = textoNovaTarefa.value;

    if (novaTarefa === "") {
        return
    } else {
        //Criando tarefa
        const tarefa = document.createElement("div");
        tarefa.classList.add("tarefa");
        main.appendChild(tarefa);

        //Div check e texto
        const checkEtarefa = document.createElement("div");
        checkEtarefa.classList.add("checkEtarefa");
        tarefa.appendChild(checkEtarefa);

        //Check
        const check = document.createElement("input");
        check.type = "checkbox";
        checkEtarefa.appendChild(check);

        //Texto
        const texto = document.createElement("span");
        texto.textContent = novaTarefa;
        texto.classList.add("tarefaCriada")
        checkEtarefa.appendChild(texto)

        //Div edit e delete
        const deleteEedit = document.createElement("div");
        deleteEedit.classList.add("deleteEedit");
        tarefa.appendChild(deleteEedit);

        //Delete e img
        const spanDelete = document.createElement("span");
        spanDelete.textContent = "Deletar ";
        spanDelete.classList.add("delete");
        deleteEedit.appendChild(spanDelete)

        const deleteImg = document.createElement("img");
        deleteImg.src = "./icon/delete.png";
        spanDelete.appendChild(deleteImg)

        //Edit
        const edit = document.createElement("img");
        edit.src = "icon/edit.png";
        deleteEedit.appendChild(edit);
        edit.classList.add("edit")
    }
    textoNovaTarefa.value = "";
})

//marcar concluido
main.addEventListener("click", (e) => {
    const tarefaFinalizada = e.target.closest(".tarefa");
    const textoFinalizado = e.target.closest(".checkEtarefa")
    if (e.target.type === "checkbox") {

        if (e.target.checked) {
            tarefaFinalizada.classList.add("concluida")
            textoFinalizado.classList.add("concluida-linha")

        } else {
            tarefaFinalizada.classList.remove("concluida");
            textoFinalizado.classList.remove("concluida-linha")

        }
    }
})


//Remover tarefa
main.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const tarefaSelecionada = e.target.closest(".tarefa");
        tarefaSelecionada.remove()
    }
})

//Editar tarefa
main.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        const tarefaSelecionada = e.target.closest(".tarefa").querySelector(".checkEtarefa");
        tarefaSelecionada.lastElementChild.remove();
        const texto = document.createElement("input");
        texto.placeholder = "Digite a tarefa";
        texto.classList.add("editInput");
        tarefaSelecionada.appendChild(texto);

        texto.addEventListener("keydown", (e) => {
            const novoTexto = document.createElement("span");
            novoTexto.classList.add("tarefaCriada")
            if (e.key === 'Enter') {
                if (texto.value.trim() != "") {
                    novoTexto.textContent = texto.value;
                    tarefaSelecionada.replaceChild(novoTexto, texto)
                }
            }
        })
    }

})







