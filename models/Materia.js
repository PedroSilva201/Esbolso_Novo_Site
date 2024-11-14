// models/Materia.js
const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Materia', materiaSchema);
