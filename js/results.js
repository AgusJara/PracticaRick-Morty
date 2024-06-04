let searchResults = document.querySelector ('.search-results');
let queryBuscador = location.search;
let queryStringObject = new URLSearchParams (queryBuscador);
let q = queryStringObject.get("q");

fetch (`https://rickandmortyapi.com/api/character/?name=${q}`)
    .then (function (response){
        return response .json();
    })
    .then (function (data){
        let arrayInfoPersonaje = data.results;
        let infoPersonaje = [];
        
        for (let i = 0; i < arrayInfoPersonaje.length; i++) {
            infoPersonaje += `<article>
            <img src=${arrayInfoPersonaje[i].image} alt='${arrayInfoPersonaje[i].name}'/>
            <p> Name:${arrayInfoPersonaje[i].name} </p>
            <p> Status: ${arrayInfoPersonaje[i].status} </p>
            </article>`   
        }
        searchResults.innerHTML = infoPersonaje;
    })
    .catch (function(e){
        console.log(e)
    })

    