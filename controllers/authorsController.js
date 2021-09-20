const express = require('express');
const router = express.Router();
const db = require('../models')

// current path = '/authors'

// Authors Index
router.get('/', (req, res) => {
    // Query the db for all authors
    db.Author.find({}, (error, allAuthors) => {
        if (err) return console.log(err);

        // Render the index template with all authors
        res.render('authors/index.ejs', {
            authors: allAuthors
        });
    });
});

module.exports = router;