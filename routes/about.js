const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('about.pug');
});

module.exports = router;