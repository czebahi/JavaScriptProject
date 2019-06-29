const router = require('express').Router();

const AuthorsController = require('../Controllers/authorsController');

// routes

router.get('/new', AuthorsController.new);
router.post('/', AuthorsController.create);

module.exports = router;