const express = require('express');

module.exports = {
    registerRouter() {
        const router = express.Router();

        return router;
        },
        index(req, res) {
        res.render('map', { error: req.flash('error') });
        },
    };