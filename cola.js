let cola = [];
git commit -m "chore: estructura inicial de la cola"

function enqueue(elemento) {
    cola.push(elemento);
}
git commit -m "feat: funcion enqueue implementada"

function dequeue() {
    if (cola.length === 0) {
        alert("Cola vacía");
        return;
    }
    cola.shift();
}

git commit -m "feat: funcion dequeue implementada"

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

git commit -m "feat: renderizado de la cola en la interfaz"


