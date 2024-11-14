// server.js
const express = require('express');
const path = require('path');
const homeRoute = require('./routes/home');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

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
app.get('/politicadeprivacidade', (req, res) => {
  res.render('politicadeprivacidade'); 
});
app.get('/termosdeuso', (req, res) => {
  res.render('termosdeuso'); 
});
app.get('/cookies', (req, res) => {
  res.render('cookies'); 
});
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// Configurar para ler dados do formulário no formato URL-encoded
app.use(express.urlencoded({ extended: true }));

// Rota para processar formulário de contato
app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;
    
    // Validação simples de dados (back-end)
    if (!nome || !email || !mensagem) {
        return res.status(400).send('Por favor, preencha todos os campos.');
    }

    // Processar dados aqui (ex: salvar no banco de dados ou enviar email)
    
    // Redirecionar para uma página de confirmação ou exibir mensagem de sucesso
    res.send('Sua mensagem foi enviada com sucesso!');
});
app.get('/materia/:id', (req, res) => {
  const materiaId = req.params.id;
  
  // Buscar a matéria no banco de dados pelo ID
  const materia = buscarMateriaPorId(materiaId); // Função fictícia para exemplo

  if (!materia) {
      return res.status(404).send('Matéria não encontrada');
  }

  // Renderizar o modelo genérico 'materia.ejs' com os dados da matéria
  res.render('materia', { materia });
});

// server.js

const mongoose = require('mongoose');

require('dotenv').config(); // Carregar as variáveis de ambiente


// Configuração do MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

// Configurações do Express


app.use(express.json()); // Para analisar JSON em requisições POST

// Rotas
const materiaRoute = require('./routes/materia');
app.use('/', materiaRoute);

const helmet = require('helmet');
app.use(helmet());  // Aplica diversas configurações de segurança

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limita cada IP a 100 requisições por janela
    message: "Muitas requisições vindas deste IP, tente novamente mais tarde."
});

app.use(limiter);  // Aplica o rate limit a todas as rotas

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Para requisições JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para dados URL-encoded
const winston = require('winston'); // Importa o winston

// Configuração do Winston
const logger = winston.createLogger({
  level: 'info', // Nível mínimo de log (info, warn, error)
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level.toUpperCase()}]: ${message}`;
      })
  ),
  transports: [
      new winston.transports.Console(), // Log no console
      new winston.transports.File({ filename: 'logs/server.log' }) // Log em arquivo
  ]
});

// Log de exemplo
logger.info('Logger Winston configurado com sucesso');




// Conexão ao MongoDB usando a variável de ambiente
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Configuração do servidor e outras rotas/middlewares...