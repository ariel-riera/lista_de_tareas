let listaTarea = [];

let listaTareasHechas = [];


function agregartarea() {
    let tituloTarea = document.getElementById("tituloTarea");
    let desTarea = document.getElementById("descTarea");

    //console.log(desTarea.value);

    let tarea = {
        titulo: tituloTarea.value,
        descripcion: desTarea.value,
    };
    if (localStorage.getItem("listaTarea") == undefined) {
        listaTarea = [];
    } else {
        listaTarea = JSON.parse(localStorage.getItem("listaTarea"));
    }
    //console.log(listaTarea);

    listaTarea.push(tarea);
    //console.log(listaTarea);
    localStorage.setItem("listaTarea", JSON.stringify(listaTarea));
    //mostrarListaTareas();
    listarTareas();
}

function listarTareas() {
    let listadoDeTareas = document.getElementById("listadoDeTareas");
    let listadoDeTareasHechas = document.getElementById("listadoDeTareasHechas");


    if (localStorage.getItem("listaTarea") == undefined) {
        listaTarea = [];
    } else {
        listaTarea = JSON.parse(localStorage.getItem("listaTarea"));
    }

    vaciarLista(listadoDeTareas);

    for (let i = 0; i < listaTarea.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.className = "list-group-item";
        nuevoElemento.innerHTML =
            listaTarea[i].titulo + "-" + listaTarea[i].descripcion;
        nuevoElemento.innerHTML = nuevoElemento.innerHTML + '<button class="btn btn-secondary float-right" onclick="tareaHecha(' + i + ')"> => </button>'
        nuevoElemento.id = i;
        listadoDeTareas.appendChild(nuevoElemento);
    }

    if (localStorage.getItem("listataresahechas") == undefined) {
        listaTareasHechas = [];
    } else {
        listaTareasHechas = JSON.parse(localStorage.getItem("listataresahechas"));
    }

    vaciarLista(listadoDeTareasHechas);

    for (let i = 0; i < listaTareasHechas.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.className = "list-group-item";
        nuevoElemento.innerHTML =
            listaTareasHechas[i].titulo + "-" + listaTareasHechas[i].descripcion;
        // nuevoElemento.innerHTML = nuevoElemento.innerHTML + '<button class="btn btn-secondary float-right"(' + i + ')"> => </button>'
        nuevoElemento.id = i;
        listadoDeTareasHechas.appendChild(nuevoElemento);
    }
}


function vaciarLista(listaParaVaciar) {
    while (listaParaVaciar.firstChild) {
        listaParaVaciar.removeChild(listaParaVaciar.firstChild);

    }


}

function tareaHecha(indice) {
    listaTarea = JSON.parse(localStorage.getItem("listaTarea"));
    let tareaHecha = listaTarea[indice];
    listaTarea.splice(indice, 1);

    localStorage.setItem("listaTarea", JSON.stringify(listaTarea));

    // console.log(tareaHecha);

    if (localStorage.getItem("listataresahechas") == undefined) {
        listaTareasHechas = [];
    } else {
        listaTareasHechas = JSON.parse(localStorage.getItem("listataresahechas"));
    }
    listaTareasHechas.push(tareaHecha)
    localStorage.setItem('listataresahechas', JSON.stringify(listaTareasHechas));

    listarTareas();
}