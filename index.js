const express = require("express"),
    path = require("path"),
    app = express();


const PORT = process.env.PORT||4000
console.log({PORT})
app.listen(PORT, function(){
   console.log('Servidor escuchando en el puerto ' + PORT);
})
  
app.get('/misitio', (req,res)=>{
 res.send(`<Body background="https://img.freepik.com/vector-gratis/fondo-rosa-acuarela_1082-131.jpg?w=2000">
    <h1 align="center"> Bienvenido a nuestro sitio web</h1>
    <hr><br><br>
    <h1 align="center"><b>Opciones:</b></h1> <br>
    <a href="/misitio/gastos"><h2 align="center">Gastos</h2></a>
    <br>
    <a href="/misitio/about"><h2 align="center">Acerca de nosotros</h2></a>
    </Body`);
});

app.get('/misitio/gastos', (req,res)=>{
    res.json(
    {
    gasto:'Salud',
    monto:14575.60,
    informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    }
    );
});

app.get('/misitio/about', (req,res)=>{
    res.send(`<Body background="https://img.freepik.com/vector-gratis/fondo-rosa-acuarela_1082-131.jpg?w=2000">
    <h1 align="center"> Acerca de nosotros</h1>
    <hr> <br>
    <h2><b>Integrantes:</b> Maria Fernanda Alban, Bryan Gualoto, Anthony Saritama. </h2>
    <h2><b>Materia: </b>Plataformas Web</h2>
    <h2><b>Tema: </b>Google Cloud Platform </h2>
    </Body`);
});

