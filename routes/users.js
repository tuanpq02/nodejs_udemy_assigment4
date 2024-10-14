const express = require('express');
const path = require('path');

const router = express.Router();

homeData = require('./home');

router.get('/users', (req, res, next) => {
    // console.log(homeData);
    res.render('users', {  
        pageTitle: 'Users',
        users: homeData.users,
        path: '/users'
    });
})

module.exports = router;