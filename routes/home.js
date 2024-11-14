// routes/home.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Utiliza a função do controlador para renderizar a página inicial
router.get('/', homeController.renderHomePage);

module.exports = router;

