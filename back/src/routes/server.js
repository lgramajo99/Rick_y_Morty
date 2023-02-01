const http = require('http');
const characters = require('../utils/data.js')

const _PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url.includes('rickandmorty/character')) {
        let id = req.url.split('/').at(-1);

        // let characterFilter = characters.filter(ch => ch.id === Number(id))
        let characterFilter = characters.find(ch => ch.id === Number(id))
        // console.log(characterFilter)
        res
            .writeHead(200, { "Content-type": "application/json" })
            .end(JSON.stringify(characterFilter))
    }
}).listen(_PORT, 'localhost')
