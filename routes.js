// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const pagesRoutes = require('./routes/pages');
const moviesRoutes = require('./routes/movies');
const sessionsRoutes = require('./routes/sessions');
const authorRoutes = require('./routes/authors');

// Registering our pageRoutes
app.use('/', pagesRoutes);
app.use('/movies', moviesRoutes);
app.use('/', sessionsRoutes);
app.use('/authors', authorRoutes);

// Exporting the changes
module.exports = app;