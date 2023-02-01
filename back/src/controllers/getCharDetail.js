const axios = require("axios");

const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            let character = {
                gender: data.gender,
                image: data.image,
                name: data.name,
                origin: data.origin.name,
                species: data.species,
                status: data.status,
            }
            res
                .writeHead(200, { 'Content-Type': 'text/plain' })
                .end(JSON.stringify(character))
        })
        .catch(error => res
            .writeHead(500, { 'Content-Type': 'text/plain' })
            .end(`El personaje con el id: '${id}' no se encontró... ${error}`))
};

module.exports = getCharDetail;