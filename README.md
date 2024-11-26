# Projeto Abacaxi 🍍

Este é um projeto full-stack desenvolvido com Node.js, Express, MongoDB e EJS, com funcionalidades como um sistema de contato e gerenciamento de matérias.
O certame serve como esbolso de um novo site qye está sendo realizado neste momento.

## Funcionalidades

- Cadastro de conteúdo para o site
- Sistema de contato com validação de email
- Páginas dinâmicas com EJS
- Segurança integrada com Helmet e Express-Rate-Limit

## Estrutura de Arquivos


## Tecnologias Utilizadas

- Node.js e Express
- MongoDB com Mongoose
- EJS para templates dinâmicos
- Helmet e Express-Rate-Limit para segurança
- Jest e Supertest para testes

## Configuração e Instalação

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Crie um arquivo `.env` com as variáveis de ambiente:


Esse exemplo cobre as informações essenciais. Adicione ou altere detalhes conforme necessário para refletir as particularidades do seu projeto.

### 2. **Feedback de Consentimento de Cookies (Back-End)**

Se você deseja adicionar um sistema de consentimento de cookies para conformidade com a LGPD/GPDR, pode configurar isso tanto no front-end quanto no back-end. Abaixo, explico como fazer a parte básica do back-end.

1. **Adicione uma Rota para Consentimento de Cookies**

   No seu `server.js` ou em um arquivo de rota de cookies, crie uma rota para configurar o consentimento de cookies do usuário.

   ```javascript
   app.post('/consentimento-cookies', (req, res) => {
       const consentido = req.body.consentido;
       if (consentido) {
           res.cookie('cookieConsent', 'aceito', { maxAge: 30 * 24 * 60 * 60 * 1000 }); // Expira em 30 dias
           res.status(200).json({ message: 'Consentimento aceito' });
       } else {
           res.clearCookie('cookieConsent');
           res.status(200).json({ message: 'Consentimento rejeitado' });
       }
   });
