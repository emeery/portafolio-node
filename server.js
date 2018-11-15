const express = require('express');
var app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine', 'hbs');
app.use(express.static(__dirname + '/public')); //estáticos

// app.use((req, res, next) => {
//     res.render('mantenimiento.hbs');
// });
hbs.registerHelper('getAñoActual', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('unAnuncio', (text) => {
    return text.toUpperCase()
}); 
app.get('/', (req, res) => {
    res.render('home.hbs' , {
        titulo: 'Home',
        bienvenida: 'Bienvenito a mi sitio'
    });
});
app.get('/acerca', (req, res) => {
    res.render('acerca.hbs', {
        titulo: 'Acerca Pagina'
    });
});
app.get('/error', (req, res) => {
    res.send({
        errorMensaje: 'no se obtener la solicitud'
    });
});
app.listen(3000);