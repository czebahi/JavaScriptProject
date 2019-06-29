const Movie = require('../models/movie');

exports.new = (req, res) => {
    req.isAuthenticated();
    res.render('movies/new', {
      title: `New Movie Post`
    });
};

exports.create = (req, res) => {
  req.isAuthenticated();

  req.body.movie.author = req.session.userId;
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
  req.isAuthenticated();
    Movie.find({
      author: req.session.userId
    })
    .populate('author')
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
  req.isAuthenticated();
  Movie.findOne({
    _id: req.params.id, 
    author: req.params.id})
      .then(movie => {
        res.render('movies/show', {
          movie: movie,
          title: req.body.movie.title
        });
      })
      .catch(err => {
        req.flash('error', `ERROR ${err}`);
        res.redirect('/movies');
      });
}

exports.drafts = (req, res) => {
  req.isAuthenticated();
    Movie.find({
      author: req.session.userId
    }).drafts()
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
  req.isAuthenticated();
    Movie.find(({
      author: req.body.userId
    })).published()
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
  req.isAuthenticated();
    Movie.findOne({
      _id: req.params.id, 
      author: req.params.id})
    .then(movie=>{
        res.render('movies/edit', {
            title: `Edit ${req.body.movie.title}`,
            movie: movie
        });
    })
    .catch(err => {
      req.flash('error', `ERROR ${err}`);
      res.redirect('/movies');
    });
};

exports.update = (req, res) => {
  req.isAuthenticated();
  Movie.updateOne({
    _id: req.body.id,
    author: req.session.userId
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
  req.isAuthenticated();
  Movie.deleteOne({
    _id: req.body.id,
    author: req.session.userId
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