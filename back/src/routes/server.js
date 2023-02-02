const http = require('http');
// const characters = require('../utils/data.js')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const _PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // if (req.url.includes('rickandmorty/character')) {
    //     // let characterFilter = characters.filter(ch => ch.id === Number(id))
    //     let characterFilter = characters.find(ch => ch.id === Number(id))
    //     // console.log(characterFilter)
    //     res
    //         .writeHead(200, { "Content-type": "application/json" })
    //         .end(JSON.stringify(characterFilter))
    // }
    // * ******************************************************* +


    let id = req.url.split('/').at(-1);
    console.log(req.url)

    // if (req.url.includes('onsearch')) {
    //     getCharById(res, id)
    // }
    // if (req.url.includes('detail')) {
    //     getCharDetail(res, id)
    // }

}).listen(_PORT, 'localhost')
