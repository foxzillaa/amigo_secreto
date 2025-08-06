// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {

    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si no hay nombre
    }
    
    //Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    //Limpiar el campo de entrada
    inputAmigo.value = '';
    
    //Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    
    listaAmigos.innerHTML = '';
    
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
   
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, añada algunos nombres primero.');
        return;
    }
    
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
   
    const amigoSorteado = amigos[indiceAleatorio];
    
   
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}