const axios = require('axios')

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            let character = {
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species
            }
            res
                .writeHead(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(character))
        })
        .catch(error => res
            .writeHead(500, { 'Content-Type': 'text/plain' })
            .end(`El personaje con el id: '${id}' no se encontró... ${error}`))
};





module.exports = getCharById;