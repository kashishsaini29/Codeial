const express= require('express');

const router= express.Router();
const homeController =require('../controllers/home_controller');

router.get('/', homeController.home);
//router.get('/',homeController.action);

console.log('router loaded');

module.exports=router;