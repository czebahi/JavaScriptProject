const Author = require('../models/author');

exports.login = (req, res) => {
    res.render('sessions/login', {
        title: 'Login Sucka'
    });
};

exports.authenticate = (req, res) => {
    Author.findOne({
        email: req.body.email
        })
    .then(author => {
        if(!author) throw new Error('ERROR: Your credentials do not match');
        
        author.authenticate(req.body.password, (err, isMatch) => {
            if(err) throw new Error(err);

            if(isMatch){
                req.session.userId = author.id;

                req.flash('success', 'You are now logged in. Happy Trails.');
                res.redirect('/movies');
            }else {
                req.flash('error', 'ERROR: your credentials do not match');
                res.redirect('/login');
            }s
        });
    })
    .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/login');
    });
};

exports.logout = (req, res) => {
    req.session.userId = null;
    req.flash('success', 'You are now logged out');
    req.redirect('/');
};