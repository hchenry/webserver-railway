const http = require('http');

http.createServer( (req,res) => {
    //Responder con headers
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type':'application/csv'});
    //res.writeHead(200,{'Content-Type':'application/json'});

    // res.write('id, nombre\n');
    // res.write('1, Luis\n');
    // res.write('2, Karen\n');
    // res.write('3, Maria\n');
    // res.write('4, Lily\n');
    res.write('Hola Mundo\n');
    res.end();
})
.listen(8080);
console.log('Escuchando en el puerto 8080');