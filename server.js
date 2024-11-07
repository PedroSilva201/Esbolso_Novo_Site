// server.js
const express = require('express');
const path = require('path');
const homeRoute = require('./routes/home');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o EJS como view engine e definir a pasta de views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar o Express para usar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar a rota de "home"
app.use('/', homeRoute);

// Rota para página Sobre
app.get('/sobre', (req, res) => {
    res.render('sobre'); // Renderiza 'views/sobre.ejs'
});
app.get('/contato', (req, res) => {
  res.render('contato'); // Renderiza 'views/contato.ejs'
});
app.get('/exemplo1', (req, res) => {
  res.render('exemplo1'); 
});
app.get('/exemplo2', (req, res) => {
  res.render('exemplo2'); 
});
app.get('/exemplo3', (req, res) => {
  res.render('exemplo3'); 
});
app.get('/exemplo4', (req, res) => {
  res.render('exemplo4'); 
});
app.get('/exemplo5', (req, res) => {
  res.render('exemplo5'); 
});
app.get('/exemplo6', (req, res) => {
  res.render('exemplo6'); 
});
app.get('/saibamais', (req, res) => {
  res.render('saibamais'); 
});
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
