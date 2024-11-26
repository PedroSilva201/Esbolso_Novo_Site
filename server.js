const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

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
