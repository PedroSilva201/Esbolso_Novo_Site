// models/CookieConsent.js
const mongoose = require('mongoose');

const cookieConsentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // opcional
    consentido: { type: Boolean, required: true },
    dataConsentimento: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CookieConsent', cookieConsentSchema);
