const User=require('../models/user');

module.exports.profile= function(req,res){
            return res.render('user_profile',{
                title: 'user Profile', 
            })
        }

// render the Sign Up page
module.exports.signUp=function(req,res){
      if(req.isAuthenticated()){
       return  res.redirect('/users/profile');
      }

    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
    
}

// render the Sign In page
module.exports.signIn=function(req,res){
     if (req.isAuthenticated()) {
     return  res.redirect("/users/profile");
     }

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

// get sign in data and create a session for the user
module.exports.createSession=function(req,res){

//  // steps to authenticate
//  // find user
//     User.findOne({email:req.body.email}, function(err,user){
//         if(err){console.log('error in finding user while sign In'); return;}

//         //handle user found
//         if(user){
//             // handle password which does not match
//             if(user.password != req.body.password){
//                 return res.redirect('back');
//             }

//             // handle session creation

//             res.cookie('user_id', user.id);
//             return res.redirect('/users/profile');
//         }
//         else{
//             // handle user not found
//             return res.redirect('back');
//         }
//     })


// using passport session 
return res.redirect('/');
}

// module.exports.delete=function(req,res){
//     let id=req.cookies.user_id;
//     User.findOneAndDelete(id,function(err){
//          return res.redirect('users/sign-in');
//     })
// }

module.exports.destroySession= function(req,res){
         req.logout();
    return res.redirect('/');
}