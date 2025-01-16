// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();
    
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        input.value = '';  // Limpiar el campo de texto

        actualizarListaAmigos();
    } else {
        alert('Por favor, ingrese un nombre válido o sin duplicados.');
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, ingrese al menos dos amigos para realizar el sorteo.');
        return;
    }

    let amigosSorteados = [...amigos];  // Copiar el array de amigos
    let resultados = [];
    
    // Sortear los amigos de forma aleatoria
    for (let i = 0; i < amigos.length; i++) {
        let indexSorteado = Math.floor(Math.random() * amigosSorteados.length);
        let amigoSorteado = amigosSorteados.splice(indexSorteado, 1)[0];
        resultados.push(`${amigos[i]} le toca a ${amigoSorteado}`);
    }

    mostrarResultado(resultados);
}

// Función para mostrar los resultados en la interfaz
function mostrarResultado(resultados) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';  // Limpiar la lista de resultados

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoLista.appendChild(li);
    });
}
