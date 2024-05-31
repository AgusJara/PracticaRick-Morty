let query = location.search;
console.log(query);
let queryStringObj = new URLSearchParams(query);
let id = queryStringObj.get("id");
console.log(id);
fetch (`https://rickandmortyapi.com/api/character/${id}`)
    .then (function(response){
        return response .json();
    })
    .then (function(data){
        console.log(data);
        let nombrePerso = document.querySelector ('.nombre');
        let statusPerso = document.querySelector ('.status');
        let especiePerso = document.querySelector ('.especie');
        let imagenPerso = document.querySelector ('.imagen');

        nombrePerso.innerText = data.name;
        statusPerso.innerText += data.status;
        especiePerso.innerText += data.species;
        imagenPerso.src = data.image;
        imagenPerso.alt = `Imagen de ${data.name}`;
    })
    .catch(function(error){
        console.log (error);
    })
        
    