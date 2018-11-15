const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine', 'hbs');

app.use((req, res, next) => {
    var ahora = new Date().toString();
    console.log(`${ahora} ${req.method} ${req.url}`); //log
    next();
});
// app.use((req, res, next) => {
//     res.render('mantenimiento.hbs');
// });
app.use(express.static(__dirname + '/public')); //estáticos

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
app.listen(port, () => {
    console.log(`puerto ${port}`);
});