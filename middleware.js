module.exports.isLoggedIn=(req,res,next)=>{
   
    if(!req.isAuthenticated()){
        console.log("user is not logged in");
       // res.render("home.ejs");
    }
    next();
};