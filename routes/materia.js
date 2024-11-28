<<<<<<< HEAD
// routes/materia.js
const express = require('express');
const router = express.Router();
const Materia = require('../models/Materia');

// Rota para criar uma nova matéria
router.post('/materia', async (req, res) => {
    const { titulo, conteudo } = req.body;
    try {
        const novaMateria = new Materia({ titulo, conteudo });
        await novaMateria.save();
        res.status(201).send('Matéria criada com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao criar a matéria');
    }
});

module.exports = router;
// Rota para listar todas as matérias
router.get('/materias', async (req, res) => {
    try {
        const materias = await Materia.find();
        res.render('materias', { materias }); // Renderiza uma página com a lista de matérias
    } catch (error) {
        res.status(500).send('Erro ao buscar matérias');
    }
});
=======
// routes/materia.js
const express = require('express');
const router = express.Router();
const Materia = require('../models/Materia');

// Rota para criar uma nova matéria
router.post('/materia', async (req, res) => {
    const { titulo, conteudo } = req.body;
    try {
        const novaMateria = new Materia({ titulo, conteudo });
        await novaMateria.save();
        res.status(201).send('Matéria criada com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao criar a matéria');
    }
});

module.exports = router;
// Rota para listar todas as matérias
router.get('/materias', async (req, res) => {
    try {
        const materias = await Materia.find();
        res.render('materias', { materias }); // Renderiza uma página com a lista de matérias
    } catch (error) {
        res.status(500).send('Erro ao buscar matérias');
    }
});
>>>>>>> f6fc10868c10ae704d973a999382fcaf4a5de472
