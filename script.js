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
})





