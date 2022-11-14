const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/userInform', (req, res) => {
    
    res.send(`${req.body.Eamil} ${req.body.Password}`);
});

module.exports = router;