const User=require('../models/user');

module.exports.profile= function(req,res){
    return res.render('users',{
        title:"Profile"
    })
}

// render the Sign Up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
    
}

// render the Sign In page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{   ///same name create in views folder ejs
        title:'Codeial | Sign In'
    });
     
}

// get the sign Up data
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in finding user in sign up page');return;}

        if(!user){
            User.create(req.body,function(err, user){
                if(err){console.log("Error in creating user while Signing up");return;}

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }

    })

}

// sign in and create a session for the user
module.exports.createSession=function(req,res){
    // User.findOne({email:req.body.email}, function(err,user){
    //     if(err){console.log('error in finding user while sign In'); return;}

    //     if(req.body.password != req.body.confirm_password){
    //          return res.redirect('back');
    //     }
    //     else {
    //         console.log('cookie', req.userIid);
    //     }
    // })


}