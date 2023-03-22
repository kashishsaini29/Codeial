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
    return res.render('user_sign_in',{
        title:'Codeial | Sign In'
    })
}

// get the sign Up data
module.exports.create=function(req,res){
    //later
}

// sign in and create a session for the user
module.exports.createSession=function(req,res){
    // later
}