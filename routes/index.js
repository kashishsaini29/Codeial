const express= require('express');

const router= express.Router();
const homeController =require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users')); 

console.log('router loaded');

module.exports=router;