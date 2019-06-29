// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const pagesRoutes = require('./routes/pages');
const moviesRoutes = require('./routes/movies');
const sessionsRoutes = require('./routes/sessions');

// Registering our pageRoutes
app.use('/', pagesRoutes);
app.use('/movies', moviesRoutes);
app.use('/', sessionsRoutes);

// Exporting the changes
module.exports = app;