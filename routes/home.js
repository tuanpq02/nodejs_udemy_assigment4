const express = require('express');
const path = require('path');

const router = express.Router();

users = [];

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Users',
        path: '/'
    });
})

router.post('/', (req, res, next) => {
    username = req.body.username;
    if (username.length > 0) {
        users.push({username: req.body.username});
    }    
    // console.log(users);
    res.redirect('/');
})
module.exports = {router: router, users: users};