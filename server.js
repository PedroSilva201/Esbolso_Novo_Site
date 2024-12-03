const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
/*app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});*/

// Configuração do MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

// Configuração do Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Definir o schema para mensagens de contato
const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    mensagem: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
});
const Contato = mongoose.model('Contato', ContatoSchema);

// Rotas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contato', (req, res) => {
    // Renderizar a página de contato com variáveis padrão
    res.render('contato', { success: null, error: null });
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

app.get('/exemplo7', (req, res) => {
    res.render('exemplo7');
});
app.get('/politicadeprivacidade', (req, res) => {
    res.render('politicadeprivacidade');
});

app.get('/cookies', (req, res) => {
    res.render('cookies');
});

app.get('/saibamais', (req, res) => {
    res.render('saibamais');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/termosdeuso', (req, res) => {
    res.render('termosdeuso');
});
// Rota para processar o formulário de contato
app.post('/contato', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
      const novoContato = new Contato({ nome, email, mensagem });
      const resultado = await novoContato.save();

      console.log('Mensagem salva no banco de dados:', resultado); // Log para verificar no terminal

      // Enviar uma mensagem de sucesso para o usuário
      res.render('contato', { success: 'Sua mensagem foi enviada com sucesso!', error: null });
  } catch (error) {
      console.error('Erro ao salvar no banco de dados:', error);

      // Enviar uma mensagem de erro para o usuário
      res.render('contato', { success: null, error: 'Erro ao enviar sua mensagem. Tente novamente.' });
  }
});

// Middleware para capturar rotas inexistentes (404)
app.use((req, res) => {
    res.status(404).render('erro404');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
