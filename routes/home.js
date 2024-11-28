<<<<<<< HEAD
// routes/home.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Utiliza a função do controlador para renderizar a página inicial
router.get('/', homeController.renderHomePage);

module.exports = router;

=======
// routes/home.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Utiliza a função do controlador para renderizar a página inicial
router.get('/', homeController.renderHomePage);

module.exports = router;

>>>>>>> f6fc10868c10ae704d973a999382fcaf4a5de472
