const User = require("../models/user.js");

//signup page 
module.exports.signUp = (req, res)=> {
    res.render("users/signup.ejs");
}


//signUp success data save 
module.exports.signUpSuccess = async(req, res)=> {
    try {
         let {username , password , email} = req.body;
    let newUser = new User( {
        email, username
    });
    let newRegister = await User.register(newUser , password);
    req.login(newRegister, ((err)=> {
        if(err) {
            return next(err);
        }
        else {
             req.flash("success", "welcome to listings");
             res.redirect("/listings");
        }
    }))
    }catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
   
}

//login page 
module.exports.login = (req, res)=> {
     res.render("users/login.ejs");
}

//login authenticate
module.exports.loginAuthenticate = async(req ,res)=> {
    req.flash("success", `welcome back ${req.user.username}!`);
     let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

//logout

module.exports.logout  = (req, res , next)=> {
    req.logout((err)=> {
        if(err) {
           return next(err);
        }
        req.flash("success" , "you are logged out!");
        res.redirect("/listings");
    })
}