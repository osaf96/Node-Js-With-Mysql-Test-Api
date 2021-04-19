const {verify} = require('jsonwebtoken');


module.exports = {
    validateToken:(req,res,next) => {
        var token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token,process.env.TOKEN,(err,decrypt) =>{ 
                if(err) {
                    res.json({
                        success:0,
                        message:"Invalid Token"
                    })
                }else{
                    next();
                }
            })
        }else{
            res.json({
                success:0,
                message:"Unauthorized! "
            })
        }
    }
}