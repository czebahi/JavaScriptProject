const router = require('express').Router();

const AuthorsController = require('../Controllers/authorsController');

// routes

router.get('/new', AuthorsController.new);
router.post('/create', AuthorsController.create);

module.exports = router;