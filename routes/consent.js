// server.js ou routes/consent.js
const CookieConsent = require('./models/CookieConsent');

app.post('/consentimento-cookies', async (req, res) => {
    const consentido = req.body.consentido;
    const userId = req.body.userId || null; // use o ID do usuário se houver autenticação

    try {
        const novoConsentimento = new CookieConsent({ userId, consentido });
        await novoConsentimento.save();
        
        res.cookie('cookieConsent', 'aceito', { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30 dias
        res.status(200).json({ message: 'Consentimento salvo com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao salvar consentimento' });
    }
});
