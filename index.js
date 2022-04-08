const express = require('express');
const app = express();
const router = express.Router();
 
const path = __dirname + '/views/';
const port = 9000;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
    });
     
    app.get('/', (req, res) => {
        res.sendFile(path + 'home.html');
      })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
    app.get('/clientes', (req, res) => {
        res.sendFile(path + 'clientes.html');
      })
    app.get('/productos', (req, res) => {
        res.sendFile(path + 'productos.html');
      })
    
    