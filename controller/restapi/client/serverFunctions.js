exports.homeRedirect = function (req,res,next){

    res.render ("index",{req:req,res:res});

}