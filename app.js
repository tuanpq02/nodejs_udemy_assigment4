const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public'))); 

homeData = require('./routes/home');
userRoutes = require('./routes/users');

app.use(homeData.router);
app.use(userRoutes);

app.use('/', (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});
app.listen(3000);