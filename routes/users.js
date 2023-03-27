const express =require('express');
const router = express.Router();
const passport=require('passport');

const userController= require('../controllers/users_controller');
const postController= require('../controllers/post_controller');


router.get('/profile',passport.checkAuthentication, userController.profile);
router.get('/posts', postController.posts);

router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
//router.get('/delete',userController.delete);

router.post('/create',userController.create);

//router.post('/create-session',userController.createSession);

// use passport as a middleware
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
) , userController.createSession);

router.get('/sign-out', userController.destroySession);

module.exports=router;