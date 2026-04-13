let cola = [];

// Insertar (enqueue)
function enqueue(elemento) {
    cola.push(elemento);
    mostrarCola();
}

// Eliminar (dequeue)
function dequeue() {
    if (cola.length === 0) {
        alert("La cola está vacía");
        return;
    }
    cola.shift();
    mostrarCola();
}

// Mostrar en pantalla
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
