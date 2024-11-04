const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Renderiza 'views/index.ejs'
});

module.exports = router;
