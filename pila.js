class Pila {
  constructor() {
    this.elementos = [];
  }

  push(valor) {
    this.elementos.push(valor);
  }

  pop() {
    if (this.estaVacia()) {
      return null;
    }
    return this.elementos.pop();
  }

  estaVacia() {
    return this.elementos.length === 0;
  }

  obtenerElementos() {
    return [...this.elementos];
  }
}