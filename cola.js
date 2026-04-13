let cola = [];

// Insertar elemento (enqueue)
function enqueue(elemento) {
    cola.push(elemento);
    mostrarCola();
}

// Eliminar elemento (dequeue)
function dequeue() {
    if (cola.length === 0) {
        alert("La cola está vacía");
        return;
    }
    cola.shift();
    mostrarCola();
}

// Mostrar la cola en pantalla
function mostrarCola() {
    const lista = document.getElementById("colaLista");
    lista.innerHTML = "";

    cola.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}
