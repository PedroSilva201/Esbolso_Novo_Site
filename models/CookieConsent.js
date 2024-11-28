<<<<<<< HEAD
// models/CookieConsent.js
const mongoose = require('mongoose');

const cookieConsentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // opcional
    consentido: { type: Boolean, required: true },
    dataConsentimento: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CookieConsent', cookieConsentSchema);
=======
// models/CookieConsent.js
const mongoose = require('mongoose');

const cookieConsentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // opcional
    consentido: { type: Boolean, required: true },
    dataConsentimento: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CookieConsent', cookieConsentSchema);
>>>>>>> f6fc10868c10ae704d973a999382fcaf4a5de472
