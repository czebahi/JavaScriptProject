const Movie = require('../models/movie');

exports.new = (req, res) => {
    res.render('movies/new', {
      title: `New Movie Post`
    });
};

exports.create = (req, res) => {

  Movie.create(req.body.movie)
    .then(() => {
      req.flash('success', 'New movie was created successfully');
      res.redirect('/movies');
    })
    .catch(err => {
      req.flash('error', `ERROR ${err}`);
      res.render('movies/new', {
        movie: req.body.movie,
        title: 'New Movie'
      });
    });
}


exports.index = (req, res) => {
    Movie.find()
      .then(movies => {
        res.render('movies/index', {
          movies: movies,
          title: 'Archive'
        });
      })
      .catch(err => {
        req.flash('error', `ERROR ${err}`);
        req.redirect('/');
      });
}

exports.show = (req, res) => {
    Movie.findById(req.params.id)
      .then(movie => {
        res.render('movies/show', {
          movie: movie,
          title: movie.title
        });
      })
      .catch(err => {
        req.flash('error', `ERROR ${err}`);
        res.redirect('/movies');
      });
}

exports.drafts = (req, res) => {
    Movie.find().drafts()
      .then(drafts => {
        res.render('movies/index', {
          movies: drafts,
          title: 'Drafts'
        });
      })
      .catch(err => {
        req.flash('error', `ERROR ${err}`);
        res.redirect('/');
      });
  }
  
  
exports.published = (req, res) => {
    Movie.find().published()
      .then(published => {
        res.render('movies/index', {
          movies: published,
          title: 'Published'
        });
      })
      .catch(err => {
        req.flash('error', `ERROR ${err}`);
        res.redirect('/');
      });
  }

exports.edit = (req, res) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        res.render('movies/edit', {
            title: `Edit ${Movie.title}`,
            movie: movie
        });
    })
    .catch(err => {
      req.flash('error', `ERROR ${err}`);
      res.redirect('/movies');
    });
};

exports.update = (req, res) => {
  Movie.updateOne({
    _id: req.body.id
  }, req.body.movie, {
    runValidators: true
  })
  .then(()=>{
    req.flash('success', 'Your movie was updated successfully');
    res.redirect('/movies');
  })
  .catch(err => {
    req.flash('error', `ERROR ${err}`);
    res.render('/edit', {
      title: `Edit ${req.body.movie.title}`,
      movie: req.body.movie
    });
  });
};

exports.destroy = (req, res) => {
  Movie.deleteOne({
    _id: req.body.id
  })
  .then(()=>{
    req.flash('success', 'Your Movie was deleted successfully');
    res.redirect("/movies")
  })
  .catch(err=>{
    req.flash('error', `ERROR ${err}`);
    res.redirect('/movies');
  })
};