const Author = require('../models/author');

exports.create = (req, res) => {
  Author.create(req.body.author)
    .then(() => res.status(200).send({success: "Author created successfully"}))
    .catch(err => res.stauts(400).sned(err));
};