const router = require('express').Router();
const {User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res)=>{

});

router.get('/login', (req,res)=>{
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }else{
        res.render('login');
    }
});

module.exports = router;