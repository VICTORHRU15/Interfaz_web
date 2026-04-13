let cola = [];


function enqueue(elemento) {
    cola.push(elemento);
}


function dequeue() {
    if (cola.length === 0) {
        alert("Cola vacía");
        return;
    }
    cola.shift();
}



function mostrarCola() {
    const lista = document.getElementById("colaLista");
    if (!lista) return;

    lista.innerHTML = "";

    cola.forEach(e => {
        const li = document.createElement("li");
        li.textContent = e;
        lista.appendChild(li);
    });
}




